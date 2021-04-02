
const e = require('express');
const PrescriptionModel = require('../models/prescription.model');

// get all employee list
exports.getPrescriptionList = (req, res)=> {
    //console.log('here all prescription list');
    PrescriptionModel.getAllPrescription((err, prescription) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Prescription:', prescription);
        res.send(prescription)
    })
}

// get prescription by ID
exports.getPrescriptionByID = (req, res)=>{
    //console.log('get emp by id');
    PrescriptionModel.getPrescriptionByID(req.params.id, (err, prescription)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Single Prescription Data',prescription);
        res.send(prescription);
    })
}

// create new prescription
exports.createNewPrescription = (req, res) =>{
    const prescriptionReqData = new PrescriptionModel(req.body);
    console.log('prescriptionReqData', prescriptionReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        PrescriptionModel.createPrescription(prescriptionReqData, (err, prescription)=>{
            if(err)
            res.json({status: false, message: err});
            else
                res.json({status: true, message: 'Prescription Created Successfully', data: prescription.insertId});
        })
    }
}

// update prescription
exports.updatePrescription = (req, res)=>{
    const prescriptionReqData = new PrescriptionModel(req.body);
    console.log('prescriptionReqData update', prescriptionReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        PrescriptionModel.updatePrescription(req.params.id, prescriptionReqData, (err, prescription)=>{
            if(err)
            res.json({status: false, message: err});
            else
                res.json({status: true, message: 'Prescription updated Successfully'});
        })
    }
}

// delete prescription
exports.deletePrescription = (req, res)=>{
    PrescriptionModel.deletePrescription(req.params.id, (err, prescription)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'Prescription deleted successully!'});
    })
}