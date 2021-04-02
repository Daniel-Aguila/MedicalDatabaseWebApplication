
const e = require('express');
const StaffModel = require('../models/staff.model');

// get all employee list
exports.getStaffList = (req, res)=> {
    //console.log('here all staff list');
    StaffModel.getAllStaff((err, staff) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Staff:', staff);
        res.send(staff)
    })
}

// get staff by ID
exports.getStaffByID = (req, res)=>{
    //console.log('get emp by id');
    StaffModel.getStaffByID(req.params.id, (err, staff)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single staff data',staff);
        res.send(staff);
    })
}

// create new staff
exports.createNewStaff = (req, res) =>{
    const staffReqData = new StaffModel(req.body);
    console.log('staffReqData', staffReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        StaffModel.createStaff(staffReqData, (err, staff)=>{
            if(err)
                res.json({status: false, message: err});
            else
                res.json({status: true, message: 'Staff Created Successfully', data: staff.insertId});
        })
    }
}

// update staff
exports.updateStaff = (req, res)=>{
    const staffReqData = new StaffModel(req.body);
    console.log('staffReqData update', staffReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        StaffModel.updateStaff(req.params.id, staffReqData, (err, staff)=>{
            if(err)
                res.json({status: false, message: err});
            else
                res.json({status: true, message: 'Staff updated Successfully'});
        })
    }
}

// delete staff
exports.deleteStaff = (req, res)=>{
    StaffModel.deleteStaff(req.params.id, (err, staff)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'Staff deleted successully!'});
    })
}