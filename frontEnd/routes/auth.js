const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
router.post('/login', authController.login)

router.post('/register/doctorRegister', authController.doctorRegister)

router.post('/register/patientRegister', authController.patientRegister)

router.post('/register/staffRegister', authController.staffRegister)
module.exports = router;