const projectmodel= require('../models/projects')

module.exports.ProjectUpload = async function(req,res){

    try{

        const { title, shortdiscription ,
            category,theme, description,teckstack ,projectlink,status,
            universityname,qualification,userid } = req.body;

        console.log(req.body);

        if(!title){
             res.status(404).json({Message:" title is Required"})
        }
        if(!shortdiscription){
             res.status(404).json({Message:" shortdiscription is Required"})
        }
        if(!category){
             res.status(404).json({Message:"category is Required"})
        }
        if(!theme){
             res.status(404).json({Message:"theme is Required"})
        }
        if(!description){
             res.status(404).json({Message:"description is Required"})
        }
        if(!teckstack){
             res.status(404).json({Message:"teckstack is Required"})
        }
        if(!projectlink){
             res.status(404).json({Message:"projectlink is Required"})
        }
        if(!status){
             res.status(404).json({Message:"status is Required"})
        }
        if(!universityname){
             res.status(404).json({Message:"universityname is Required"})
        }
        if(!qualification){
             res.status(404).json({Message:"qualification is Required"})
        }
        if(!userid){
             res.status(404).json({Message:"userid is Required"})
        }

        const findUser = await projectmodel.findOne({title:title})
        if(findUser){
             res.status(401).json({message:findUser});
        }
          
        const project = new projectmodel(req.body);
        const result = await project.save();
           
       res.status(200).json({message:result});

    }catch(err){
        console.log("Error In Uploading Project",err);
       return res.status(404).json({message:err.message})
    }

}