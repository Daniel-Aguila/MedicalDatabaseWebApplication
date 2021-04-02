
const Doctor = require('../models/Doctor.model');

// get all employee list
exports.getDoctorList = (req, res)=> {
    //console.log('here all employees list');
    Doctor.getAllDoctors((err, Doctors) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Doctors', Doctors);
        res.send(employees)
    })
}

// get employee by ID
exports.getDoctorByappointmentID = (req, res)=>{
    //console.log('get emp by id');
    Doctor.getDoctorByappointmentID(req.params.id, (err, employee)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single employee data',employee);
        res.send(employee);
    })
}

exports.getDoctorByserviceID = (req, res)=>{
    //console.log('get emp by id');
    Doctor.getDoctorByserviceID(req.params.id, (err, Doctor)=>{
        if(err)
        res.send(err);
        console.log('single employee data',Doctor);
        res.send(Doctor);
    })
}

exports.getDoctordurationID = (req, res)=>{
    //console.log('get emp by id');
    Doctor.getDoctorBydurationID(req.params.id, (err, Doctor)=>{
        if(err)
        res.send(err);
        console.log('single employee data',Doctor);
        res.send(Doctor);
    })
}

exports.getDoctorpriceID = (req, res)=>{
    //console.log('get emp by id');
    Doctor.getDoctorBypriceID(req.params.id, (err, Doctor)=>{
        if(err)
        res.send(err);
        console.log('single employee data',Doctor);
        res.send(Doctor);
    })
}

// create new employee
exports.createNewDoctor = (req, res) =>{
    const DoctoreReqData = new Doctor(req.body);
    console.log('DoctoreReqData', DoctoreReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        Doctor.createDoctor(DoctoreReqData, (err, Doctor)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Service Booked Created Successfully', data: Doctor.insertId})
        })
    }
}

// update employee
exports.updateDoctor = (req, res)=>{
    const DoctoreReqData = new Doctor(req.body);
    console.log('DoctoreReqData update', DoctoreReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        Doctor.updateDoctor(req.params.id, DoctoreReqData, (err, Doctor)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Doctor updated Successfully'})
        })
    }
}

//employee = Doctor
// delete employee
exports.deleteDoctor = (req, res)=>{
    Doctor.deleteDoctor(req.params.id, (err, Doctor)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Doctor deleted successully!'});
    })
}