const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    savedProjects:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project",
    }]
});

const UserModel = mongoose.model('user',userSchema);

module.exports.UserModel;