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