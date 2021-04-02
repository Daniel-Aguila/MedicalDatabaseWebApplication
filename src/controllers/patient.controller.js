
const e = require('express');
const PatientModel = require('../models/patient.model');

// get all employee list
exports.getPatientList = (req, res)=> {
    //console.log('here all patient list');
    PatientModel.getAllPatient((err, patient) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Patient:', patient);
        res.send(patient)
    })
}

// get patient by ID
exports.getPatientByID = (req, res)=>{
    //console.log('get emp by id');
    PatientModel.getPatientByID(req.params.id, (err, patient)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Single Patient Data',patient);
        res.send(patient);
    })
}

// create new patient
exports.createNewPatient = (req, res) =>{
    const patientReqData = new PatientModel(req.body);
    console.log('patientReqData', patientReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        PatientModel.createPatient(patientReqData, (err, patient)=>{
            if(err)
            res.json({status: false, message: err});
            else
                res.json({status: true, message: 'Patient Created Successfully', data: patient.insertId});
        })
    }
}

// update patient
exports.updatePatient = (req, res)=>{
    const patientReqData = new PatientModel(req.body);
    console.log('patientReqData update', patientReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        PatientModel.updatePatient(req.params.id, patientReqData, (err, patient)=>{
            if(err)
                res.json({status: false, message: err});
            else
                res.json({status: true, message: 'Patient updated Successfully'});
        })
    }
}

// delete patient
exports.deletePatient = (req, res)=>{
    PatientModel.deletePatient(req.params.id, (err, patient)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'Patient deleted successully!'});
    })
}