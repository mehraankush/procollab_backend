const projectmodel= require('../models/projects')
const UserModel= require('../models/user')

module.exports.ProjectUpload = async function(req,res){

    try{

        const { title, shortdiscription ,
            category,theme, description,teckstack ,projectlink,status,
            universityname,qualification,userid,photo ,collaborator} = req.body;

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

       //   chacking if the project is already exit with the same title 
        const findProject= await projectmodel.findOne({title:title});
        if(findProject){
             res.status(401).json({message:"Project Already exist with same title"});
        }
        
        // saving the project
        const project = new projectmodel(req.body);
        project.photo.push(photo);
        const result = await project.save();

        const findUser = await UserModel.findOne({_id:userid});
        if(!findUser){
          res.status(401).json({Message:"userid is not authenticate"});
        }

       //  saving project id to the user saveprojects array 
         findUser.savedProjects.push(result._id);
        await findUser.save();
           
       res.status(200).json({message:result});

    }catch(err){
        console.log("Error In Uploading Project",err);
       return res.status(404).json({message:err.message});
    }

}


module.exports.getAllProjects = async (req,res) =>{
     try{
          const AllProjects = await projectmodel.find({});
          res.status(200).json({message:AllProjects});
     }catch(err){
          console.log("Error In Getting Projects",err);
          res.status(404).json({message:err.message});
     }
}
module.exports.home = async (req,res) =>{
   res.json({message:"Hello Viewer"});
}