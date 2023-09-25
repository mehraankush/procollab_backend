const mongoose = require('mongoose');

const collageSchema = new mongoose.Schema({
    collagename:{
        type:String,
        required:true,
    },
    Projectids:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project",
    }]
});

const CollageModel = mongoose.model('collage',collageSchema);

module.exports = CollageModel;