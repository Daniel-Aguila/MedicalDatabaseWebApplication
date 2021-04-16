const express = require('express');
const authController = require('../controllers/auth');
const apptController = require('../controllers/appt')
const router = express.Router();


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

module.exports = router;