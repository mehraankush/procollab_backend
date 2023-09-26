const UserNModel = require('../models/user')
const AdminModel = require('../models/admin')
const CollageModel = require('../models/collage')

// user auth 

module.exports.SignupRequest = async function(req,res){

    try{
        // console.log(res.body)
        const { fullname,email, password } = req.body;

        if(!fullname){
            return res.status(404).json({Message:"UserName is Required"})
        }
        if(!email){
            return res.status(404).json({Message:"UserName is Email"})
        }
        if(!password){
            return res.status(404).json({Message:"UserName is Password"})
        }

        const finsUser = await UserNModel.findOne({email:email});
            if(finsUser){
                return res.status(201).json({message:"User Already Exist"});
            }
          
       const user = new UserNModel({username:fullname,email:email,password:password});
       const newUser = await user.save();

        res.status(200).json({message:"User Created Succesfully"});

    }catch(err){
        console.log("Error In signup",err);
       return res.status(404).json({message:err.message})
    }

}

module.exports.SignInRequest = async function(req,res){

    try{
        const { email, password } = req.body;
        console.log(req.body);

        if(!email){
             res.status(404).json({Message:" Email is Required"})
        }
        if(!password){
             res.status(404).json({Message:"Email is Required"})
        }

        const findUser = await UserNModel.findOne({email:email});
        // console.log(findUser)
        if(!findUser){
             res.status(401).json({message:"You Don't have account Create one"});
        }
        if(password != findUser.password){
             res.status(401).json({Message:"Email Or password is Wrong"});
        }
           
       return res.status(200).json({message:findUser});

    }catch(err){
        console.log("Error In signin",err);
       return res.status(404).json({message:err.message})
    }

}

// admin auth  

module.exports.AdminSignupRequest = async function(req,res){

    try{
        console.log(req.body)
        const { collagename ,email, password } = req.body;

        if(!collagename){
            return res.status(404).json({Message:"Collage Name is Required"})
        }
        if(!email){
            return res.status(404).json({Message:"Email is Required"})
        }
        if(!password){
            return res.status(404).json({Message:"Password is Required"})
        }

        const findAdmin = await AdminModel.findOne({email:email});
            if(findAdmin){
                return res.status(201).json({message:"Admin Already Exist"});
            }
          
       const admin = new AdminModel({collagename:collagename,email:email,password:password});
       const newAdmin = await admin.save();

    //    finding collage 

        const collage = await CollageModel.findOne({collagename:collagename});
        if(collage){
            newAdmin.collageId = collage._id;
            await newAdmin.save();
        }else{
          const newCollage = new CollageModel({collagename:collagename});
          const res = await newCollage.save();
            newAdmin.collageId = res._id;
            await newAdmin.save();
        }

        
        res.status(200).json({message:"Admin Created Succesfully",newAdmin});

    }catch(err){
        console.log("Error In signup",err);
       return res.status(404).json({message:err.message})
    }

}

module.exports.AdminSignInRequest = async function(req,res){

    try{
        const { email, password } = req.body;
        console.log(req.body);

        if(!email){
             res.status(404).json({Message:" Email is Required"})
        }
        if(!password){
             res.status(404).json({Message:"Email is Required"})
        }

        const findAdmin = await AdminModel.findOne({email:email});
        // console.log(findUser)
        if(!findAdmin){
             res.status(401).json({message:"You Don't have account Create one"});
        }
        if(password != findAdmin.password){
             res.status(401).json({Message:"Email Or password is Wrong"});
        }
           
       return res.status(200).json({message:findAdmin});

    }catch(err){
        console.log("Error In signin",err);
       return res.status(404).json({message:err.message})
    }

}