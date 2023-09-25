const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    shortdiscription:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,  // hardware/software
    },
    theme:{
        type:String,
        required:true,   // web , blockchain etc..
    },
    description:{
        type:String,
        required:true,
    },
    teckstack:{
        type:String,
        required:true,
    },
    projectlink:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    photo:[{
        type:String,
    }],
    universityname:{
        type:String,
        required:true,
    },
    qualification:{
        type:String,
        required:true,
    },
    approved:{
        type:Boolean,
        default:false,
    },
    request:{
        type:Boolean,
        default:false,
    },
    collaborator:{
        type:String,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
});

const projectmodel= mongoose.model('project',projectSchema);

module.exports = projectmodel;