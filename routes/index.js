const express = require('express')
const homecontroler = require('../controlers/homecontroler')
const router = express.Router();


router.get('/',homecontroler.home);


module.exports = router;