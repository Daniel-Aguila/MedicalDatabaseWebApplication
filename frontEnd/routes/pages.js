const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.render('index');
});

router.get('/register', (req,res)=>{
    res.render('register');
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

router.get('/homePageAfterLogin/patientPage/patientRegister', (req,res)=>{
    res.render('patientRegister');
});

router.get('/homePageAfterLogin/staffRegister', (req,res)=>{
    res.render('staffRegister');
});

router.get('/homePageAfterLogin/patientPage', (req,res)=>{
    res.render('patientPage');
});
module.exports = router;