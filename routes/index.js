const express = require('express')
const userControler = require('../controlers/userControler')
const uploadProjects = require('../controlers/peojectControler')
const router = express.Router();

router.get('/',uploadProjects.home);

router.post('/signup',userControler.SignupRequest);
router.post('/signin',userControler.SignInRequest);

// upload projects 
router.post('/uploadprojects',uploadProjects.ProjectUpload);

// admin 
router.post('/adminsignup',userControler.AdminSignupRequest);
router.post('/adminsignin',userControler.AdminSignInRequest);


router.get('/get/projects',uploadProjects.getAllProjects);

// get project details 
router.get('/getprojectsdetails/:id',uploadProjects.getProjectsDetails);

// get all university projects 
router.get('/universityprojects/:id',uploadProjects.getUniversityProjects)


module.exports = router;