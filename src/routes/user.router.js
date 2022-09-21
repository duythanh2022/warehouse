const express = require('express');
const userController = require("../controllers/user.controller")
const router = express.Router();

router.post('/register',userController.authRegister)
router.post('/login',userController.authLogin)
module.exports = router