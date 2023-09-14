const express = require('express')
const bodyParser = require("body-parser")

const app = express();
const PORT = process.env.PORT || 6000;


app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use('/',require('./routes'));



app.listen(PORT, function(){
    console.log("Server is running on port ",PORT);
});
