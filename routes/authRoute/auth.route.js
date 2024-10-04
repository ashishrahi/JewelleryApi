const express = require('express');
const router = express.Router();
const {loginAdmin}= require('../../controller/authController/Auth.controller')
    

//Login
router.post('/login',loginAdmin)







module.exports = router;
