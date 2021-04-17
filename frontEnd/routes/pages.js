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