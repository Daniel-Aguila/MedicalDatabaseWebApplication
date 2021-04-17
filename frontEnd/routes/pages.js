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

router.get('/homePageAfterLogin', (req,res)=>{
    res.render('homePageAfterLogin');
});

router.get('/homePageAfterLogin/doctorRegister', (req,res)=>{
    res.render('doctorRegister');
});

router.get('/homePageAfterLogin/patientRegister', (req,res)=>{
    res.render('patientRegister');
});

module.exports = router;