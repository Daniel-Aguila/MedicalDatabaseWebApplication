
const Doctor = require('../models/doctor.model');

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
exports.getDoctorBydoctorID = (req, res)=>{
    //console.log('get emp by id');
    Doctor.getDoctorBydoctorID(req.params.id, (err, employee)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single employee data',employee);
        res.send(employee);
    })
}

exports.getDoctorByscheduleID = (req, res)=>{
    //console.log('get emp by id');
    Doctor.getDoctorByscheduleID(req.params.id, (err, Doctor)=>{
        if(err)
        res.send(err);
        console.log('single employee data',Doctor);
        res.send(Doctor);
    })
}

exports.getDoctorSpeciality = (req, res)=>{
    //console.log('get emp by id');
    Doctor.getDoctorBySpeciality(req.params.id, (err, Doctor)=>{
        if(err)
        res.send(err);
        console.log('single employee data',Doctor);
        res.send(Doctor);
    })
}

exports.getDoctorisPrimary = (req, res)=>{
    //console.log('get emp by id');
    Doctor.getDoctorByisPrimary(req.params.id, (err, Doctor)=>{
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