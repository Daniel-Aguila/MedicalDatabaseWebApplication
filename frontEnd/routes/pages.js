const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/register', (req,res)=>{
    res.render('register');
});

router.get('/patient/home', authController.getUser, (req,res)=>{
    res.render('patientHome');
});

router.get('/patient/reportAppointment', authController.getUser,(req,res)=>{
    res.render('reportAppointment');
});

router.get('/patient/reportAppointmentDoctor', authController.getUser,(req,res)=>{
    res.render('reportAppointmentDoctor');
});

router.get('/patient/reportOffices', (req,res)=>{
    res.render('reportOffices');
});

router.get('/patient/reportAppointmentRoute', authController.getUser,(req,res)=>{
    res.render('reportAppointmentRoute');
});

router.get('/login/listOfDoctors', (req,res)=>{
    res.render('listOfDoctors');
});

router.get('/login/listOfPatients', (req,res)=>{
    res.render('listOfPatients');
});

router.get('/patient/reportPatients', (req,res)=>{
    res.render('reportPatients');
});

router.get('/patient/scheduleAppointment', authController.getUser,(req,res)=>{
    res.render('patientScheduleAppointment');
});

router.get('/patient/appointmentHistory', authController.getUser,(req,res)=>{
    res.render('patientAppointmentHistory');
});

router.get('/patient/billing', authController.getUser,(req,res)=>{
    res.render('patientBilling');
});

router.get('/patient/patientDetails', (req,res)=>{
    res.render('patientDetails');
});

router.get('/login', (req,res)=>{   
    res.render('login');
});

router.get('/login/homePageDoctor', (req,res)=>{
    res.render('homePageDoctor');
});

router.get('/login/homePageStaff', (req,res)=>{
    res.render('homePageStaff');
});

router.get('/login/homePagePatient', (req,res)=>{
    res.render('homePagePatient');
});

router.get('/login/doctorLogin', (req,res)=>{
    res.render('doctorLogin');
});

router.get('/login/staffLogin', (req,res)=>{
    res.render('staffLogin');
});

router.get('/login/patientLogin', (req,res)=>{
    res.render('patientLogin');
});

router.get('/register/doctorRegister', (req,res)=>{
    res.render('doctorRegister');
});

router.get('/register/patientRegister', (req,res)=>{
    res.render('patientRegister');
});

router.get('/register/staffRegister', (req,res)=>{
    res.render('staffRegister');
}); 

router.get('/doctor/editSchedule', (req,res)=>{   
    res.render('doctorEditSchedule');
});

module.exports = router;