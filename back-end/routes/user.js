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
router.put('/update', async(req, res) => {
  try {
    const {username, fullname, phone_number, bio, adresse, location, website, image} = req.body;
    
    if (!req.session.User_id) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await User.findById(req.session.User_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (username && username !== user.username) {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Username already taken" });
      }
    }
    const updates = {};
    if (username) updates.username = username;
    if (fullname) updates.fullname = fullname;
    if (phone_number) updates.phone_number = phone_number;
    if (bio !== undefined) updates.bio = bio;
    if (adresse !== undefined) updates.adresse = adresse;
    if (location !== undefined) updates.location = location;
    if (website !== undefined) updates.website = website;

    if (image) {
      try {
        console.log('Processing image...');
        if (image.includes('base64')) {
          const base64Data = image.split(';base64,').pop();
          const imageBuffer = Buffer.from(base64Data, 'base64');
          
          const resizedImageBuffer = await sharp(imageBuffer)
            .resize(200, 200)
            .jpeg({ quality: 90 })
            .toBuffer();
          
          updates.image = resizedImageBuffer;
          console.log('Image processed successfully');
        }
      } catch (imageError) {
        console.error('Error processing image:', imageError);
        return res.status(400).json({ message: "Failed to process image" });
      }
    }

    console.log('Updating user with data:', {
      ...updates,
      image: updates.image ? 'Image data present' : 'No image data'
    });

    const updatedUser = await User.findByIdAndUpdate(
      req.session.User_id,
      { $set: updates },
      { new: true, runValidators: true }
    );
    let base64Image = "";
    if (updatedUser.image && updatedUser.image.length > 0) {
      base64Image = updatedUser.image.toString('base64');
    }
    res.json({
      message: "Profile updated successfully",
      user: {
        username: updatedUser.username,
        fullname: updatedUser.fullname,
        hasImage: !!updatedUser.image,
        image: base64Image
      }
    });

  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ 
      message: "Failed to update profile",
      error: error.message,
      details: error.errors 
    });
  }
});
// Update your GET image route to properly format the response
router.get('/image', async(req, res) => {
  try {
    const user_id = req.session.User_id;
    if(!user_id) {
      return res.status(401).json({ message: "No session found" });
    }
    
    const user = await User.findOne({ _id: user_id });
    if (!user || !user.image) {
      return res.status(404).json({ message: "No image found" });
    }

    // Convert buffer to base64
    const base64Image = user.image.toString('base64');
    res.json({ image: base64Image });
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ message: "Error fetching image" });
  }
});

router.post('/login', async(req, res) => {
  try {
      const {email, password} = req.body;
      console.log("Login attempt for email:", email);
      
      const user = await User.findOne({email: email});
      if(!user) {
          return res.status(400).json({message: "User not found"});
      }

      // Add debugging logs
      console.log("Input password:", password);
      console.log("Stored hashed password:", user.password);
      
      // Try comparing with await
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Password match result:", isMatch);

      if(!isMatch) {
          return res.status(400).json({message: "Invalid password"});
      }

      // Set session data
      req.session.User_id = user._id;
      req.session.Username = user.username;
      req.session.Fullname = user.fullname;

      res.json({ 
          message: "Login successful", 
          user1: req.session.id, 
          user2: req.session.Username, 
          user3: req.session.Fullname
      });

  } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({
          message: "Login failed",
          error: error.message
      });
  }
});


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
      user.image = resizedImageBuffer;
      await user.save();
      res.json({ message: 'Profile image uploaded successfully' , image: user.image});
    } else {
      res.status(400).json({ message: 'No file uploaded' });
    }
  });

router.get('/session-checker',(req,res)=>{
    if(req.session.User_id){
        res.send({message:"Session is active",user_id:req.session.User_id , username: req.session.Username})
        }
         else{
             res.send({message:"Session is not active",user_id:null} )
     }
})

module.exports = router;
