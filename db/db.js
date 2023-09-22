const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// const URL = `mongodb+srv://${process.env.USER}:${process.env.Mongodb_Pass}@myrecipe.zzi4z2s.mongodb.net/myrecipe?retryWrites=true&w=majority`;
// const URL = `mongodb+srv://${process.env.USER}:${process.env.Mongodb_Pass}@procollab.mlrh89s.mongodb.net/procollab?retryWrites=true&w=majority`;

const URL = process.env.MONGO_URL;
// console.log(URL);

const connectDB  = async ()  =>{
    try{ 
        await mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
     });
      console.log('db connected succesfully');
 
    }catch(err){
      console.log('error while Connecting database',err);
    }
 };
 module.exports =connectDB;

