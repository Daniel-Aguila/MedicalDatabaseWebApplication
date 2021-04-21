const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/register', (req,res)=>{
    res.render('register');
});

router.get('/patient/home', (req,res)=>{
    res.render('patientHome');
});

router.get('/patient/reportAppointment', (req,res)=>{
    res.render('reportAppointment');
});

router.get('/patient/reportOffices', (req,res)=>{
    res.render('reportOffices');
});

router.get('/patient/reportAppointmentRoute', (req,res)=>{
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

router.get('/patient/scheduleAppointment', (req,res)=>{
    res.render('patientScheduleAppointment');
});

router.get('/patient/appointmentHistory', (req,res)=>{
    res.render('patientAppointmentHistory');
});

router.get('/patient/billing', (req,res)=>{
    res.render('patientBilling');
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

module.exports = router;