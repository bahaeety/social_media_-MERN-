const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var user = new Schema({
    fullname:{
        type:String,
        required:[true,'fullname is required']

    },
    username:{
        type:String,
        required:[true,'username is required'],
        unique:true
        
    }
    ,
    email:{
        type:String,
        required:[true,'email is required']
    }
    ,
    password:{
        type:String,
        required:[true,'password is required'],
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, "Password invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    role:{
        type:String,
        required:[true,'role is required'],
        enum: ['admin', 'user'],
        default: 'user'
    },
    phone_number:{
        type:String,
        required:[true,'phone number is required']
    },
    bio:{
        type:String,
        maxlength: 200,
    },
    adresse:{
        type:String,
        maxlength: 200

    },
    image:{
        type:Buffer,
        default:Buffer.alloc(0)
    },
    location:{
    type:String,
    default:""
    },
    website:{
        type:String,
        default:""
    },
    posts:{
        type:Array,
        default:[]
    },
    comments:{
        type:Array,
        default:[]
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    likes:{
        type:Array,
        default:[]
    }

    }
    , {timestamps : true});

    user.pre('save',async function (next){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
      next();
    })


const User = mongoose.model('User', user );
module.exports = User;