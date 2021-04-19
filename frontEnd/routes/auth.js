const express = require('express');
const authController = require('../controllers/auth');
const apptController = require('../controllers/appt')
const billController = require('../controllers/billing')
const router = express.Router();
router.post('/login/doctorLogin', authController.doctorLogin)

router.post('/login/patientLogin', authController.patientLogin)

router.post('/login/staffLogin', authController.staffLogin)

router.post('/register/doctorRegister', authController.doctorRegister)

router.post('/register/patientRegister', authController.patientRegister)
router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

router.post('/homePageAfterLogin/doctorRegister', authController.doctorRegister);
router.post('/homePageAfterLogin/patientRegister', authController.patientRegister);

router.post('/scheduleAppointment', apptController.scheduleAppointment);
router.post('/cancelAppointment', apptController.cancelAppointment);
// router.post('/changeAppointment', apptController.changeAppointment);
router.get('/viewAppointments', apptController.viewAllAppointments);
router.get('/viewActiveAppointments', apptController.viewActiveAppointments);

router.get('/viewBilling', billController.viewBilling);

router.post('/register/staffRegister', authController.staffRegister)
module.exports = router;