const express = require('express')
const bodyParser = require("body-parser")
const connectDB = require('./db/db.js')
const app = express();
const PORT = process.env.PORT || 8000;
var cors = require('cors')


connectDB();
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use('/',require('./routes'));

app.listen(PORT, function(){
    console.log("Server is running on port ",PORT);
});
