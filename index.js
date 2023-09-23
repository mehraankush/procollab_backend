const express = require('express')
const bodyParser = require("body-parser")
// const connectDB = require('./db/db.js')
const app = express();
const PORT = process.env.PORT || 8000;
var cors = require('cors');
const  mongoose  = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const URL = process.env.MONGO_URL;
// console.log(URL);


  mongoose.connect(
    URL,
   { useNewUrlParser: true,
    useUnifiedTopology: true,
   })
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));

// connectDB();

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use('/',require('./routes'));

app.listen(PORT, function(){
    console.log("Server is running on port ",PORT);
});
