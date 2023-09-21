const UserNModel = require('../models/user')


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