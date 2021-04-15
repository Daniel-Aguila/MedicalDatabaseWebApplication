const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


router.post('/register', authController.register)

router.post('/login', authController.login)

router.post('/homePageAfterLogin/doctorRegister', authController.doctorRegister)

router.post('/homePageAfterLogin/patientPage/patientRegister', authController.patientRegister)

router.post('/homePageAfterLogin/staffRegister', authController.patientRegister)
module.exports = router;