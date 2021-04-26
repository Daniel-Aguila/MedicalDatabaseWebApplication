const express = require('express');
const authController = require('../controllers/auth');
const apptController = require('../controllers/appt')
const billController = require('../controllers/billing')
const router = express.Router();
router.post('/doctorLogin', authController.doctorLogin)

router.post('/patientLogin', authController.patientLogin)

router.post('/staffLogin', authController.staffLogin)

router.post('/register/doctorRegister', authController.doctorRegister)

router.post('/register/patientRegister', authController.patientRegister)
router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

router.post('/homePageAfterLogin/doctorRegister', authController.doctorRegister);
router.post('/homePageAfterLogin/patientRegister', authController.patientRegister);

router.post('/scheduleAppointment', apptController.scheduleAppointment);
router.post('/cancelAppointment', apptController.cancelAppointment);

router.post('/specialistAssign', apptController.specialistAssign);
router.post('/specialistUnassign', apptController.specialistUnassign);

router.post('/patient/patientDetails', authController.patientDetails);
// router.post('/changeAppointment', apptController.changeAppointment);
router.get('/viewAppointments', apptController.viewAllAppointments);
router.get('/viewAllAppointmentsDoctor', apptController.viewAllAppointmentsDoctor);


router.get('/viewAppointmentByID/?:startTime=?/?:endTime=?', apptController.viewAppointmentByID);
router.get('/viewPatientReport/?:startTime=?/?:endTime=?/?:blood=?', apptController.viewPatientReport);
router.get('/viewOfficeReport/?:state=?/?:vaccineAvailable=?', apptController.viewOfficeReport);
router.get('/viewActiveAppointments', apptController.viewActiveAppointments);
router.get('/viewActiveAppointmentsForDoctor', apptController.viewActiveAppointmentsForDoctor);
router.get('/getDoctorName', apptController.getDoctorName);

router.get('/params/?:startTime=?/?:endTime=?', apptController.params);

// TEMP STUFF
router.get('/paramsTEMP/?:startTime=?/?:endTime=?', apptController.paramsTEMP);
router.get('/paramsTEMPpatient/?:startTime=?/?:endTime=?', apptController.paramsTEMPpatient);
router.get('/viewAppointmentByIDTEMP/?:startTime=?/?:endTime=?', apptController.viewAppointmentByIDTEMP);
router.get('/viewAppointmentByIDTEMPpatient/?:startTime=?/?:endTime=?', apptController.viewAppointmentByIDTEMPpatient);
// TEMP STUFF --}}

router.get('/infoGet', authController.infoGet);

router.get('/doctorParams/?:startTime=?/?:endTime=?/?:blood=?', apptController.doctorParams);
router.get('/officeParams/?:state=?/?:vaccineAvailable=?', apptController.officeParams);

router.get('/viewAllDoctors', apptController.viewAllDoctors);

router.get('/viewAllPatients', apptController.viewAllPatients);


router.get('/viewBilling', billController.viewBilling);

router.post('/register/staffRegister', authController.staffRegister)

router.post('/doctor/changeWorkSched', authController.doctorChangeWorkSched);

router.post('/staff/changeAvailVacc', authController.staffChangeAvailVacc);

module.exports = router;