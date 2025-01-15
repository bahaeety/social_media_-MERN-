const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const sharp = require('sharp');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const User = require('../models/user');

router.post('/register',async (req, res) => {
    const { username, email, phone_number, fullName, password } = req.body;
    
    const user = new User({
        fullname: fullName,
        email: email,
        username: username,
        phone_number: phone_number,
        password: password
    });
    console.log(user);
    await user.save();
});

router.post('/login',async(req,res)=>{

    const {email,password} = req.body;
    console.log(email)
    const user = await User.findOne({email:email});
    if(!user){
        return res.status(400).send({message:"User not found"});
    }
    console.log(password)
    console.log(await bcrypt.compare(password,user.password))
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).send({message:"Invalid password"});
    }

    req.session.User_id = user._id
    req.session.Username = user.username

    
    res.send({ message: "Login successful", user1: req.session.id , user2: req.session.Username});

})


    router.post('/logout', (req, res) => {
        req.session.destroy(err => {
          if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ message: 'Logout failed' });
          }
          res.clearCookie('connect.sid'); 
          res.status(200).json({ message: 'Logged out successfully' });
        });
      });


router.post('/image', upload.single('profile'), async (req, res) => {
    console.log(req.session)
    const user = await User.findOne({ _id: req.session.User_id });
  
    if (req.file) {
        const resizedImageBuffer = await sharp(req.file.buffer)
        .resize(40, 40)
        .png({ quality: 100 })
        .toBuffer();
      user.image = resizedImageBuffer.toString('base64');
      await user.save();
      res.json({ message: 'Profile image uploaded successfully' , image: user.image});
    } else {
      res.status(400).json({ message: 'No file uploaded' });
    }
  });
router.get('/image',async(req,res)=>{
    const user_id = req.session.User_id;
    if(!user_id) return res.json("no session found to get the profile picture")
    const user = await User.findOne({ _id: user_id });
    res.json({ image: user.image });
})
router.get('/session-checker',(req,res)=>{
    if(req.session.User_id){
        res.send({message:"Session is active",user_id:req.session.User_id , username: req.session.Username})
        }
         else{
             res.send({message:"Session is not active",user_id:null} )
     }
})

module.exports = router;
