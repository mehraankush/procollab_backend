const express = require('express')
const userControler = require('../controlers/userControler')
const uploadProjects = require('../controlers/peojectControler')
const router = express.Router();


router.post('/signup',userControler.SignupRequest);
router.post('/signin',userControler.SignInRequest);

// upload projects 
router.post('/uploadprojects',uploadProjects.ProjectUpload);


module.exports = router;