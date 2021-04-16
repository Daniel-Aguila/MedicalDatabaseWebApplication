const express = require('express');
const authController = require('../controllers/auth');
const apptController = require('../controllers/appt')
const router = express.Router();


router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

router.post('/homePageAfterLogin/doctorRegister', authController.doctorRegister);
router.post('/homePageAfterLogin/patientRegister', authController.patientRegister);

// router.post('/scheduleAppointment', apptController.scheduleAppt);
// router.post('/cancelAppointment', apptController.cancelAppt);
// router.post('/changeAppointment', apptController.changeAppt);
router.get('/viewAppointments', apptController.viewAppts);
router.get('/viewActiveAppointments', apptController.viewActiveAppts);

module.exports = router;