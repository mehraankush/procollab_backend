const express = require('express')
const homecontroler = require('../controlers/homecontroler')
const userControler = require('../controlers/userControler')
const router = express.Router();


router.get('/',homecontroler.home);
router.post('/signup',userControler.SignupRequest);
router.post('/signin',userControler.SignInRequest);


module.exports = router;