const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
router.post('/login/doctorLogin', authController.doctorLogin)

router.post('/login/patientLogin', authController.patientLogin)

router.post('/login/staffLogin', authController.staffLogin)

router.post('/register/doctorRegister', authController.doctorRegister)

router.post('/register/patientRegister', authController.patientRegister)

router.post('/register/staffRegister', authController.staffRegister)
module.exports = router;