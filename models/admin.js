const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    collagename:{
        type:String,
        required:true,
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
    collageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"collage",
    }
});

const AdminModel = mongoose.model('admin',adminSchema);

module.exports = AdminModel;