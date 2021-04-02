
const ServiceBooked = require('../models/serviceBooked.model');

// get all employee list
exports.getServiceBookedList = (req, res)=> {
    //console.log('here all employees list');
    ServiceBooked.getAllServiceBookeds((err, serviceBookeds) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('serviceBookeds', serviceBookeds);
        res.send(employees)
    })
}

// get employee by ID
exports.getServiceBookedByappointmentID = (req, res)=>{
    //console.log('get emp by id');
    ServiceBooked.getServiceBookedByappointmentID(req.params.id, (err, employee)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single employee data',employee);
        res.send(employee);
    })
}

exports.getServiceBookedByserviceID = (req, res)=>{
    //console.log('get emp by id');
    ServiceBooked.getServiceBookedByserviceID(req.params.id, (err, servicebooked)=>{
        if(err)
        res.send(err);
        console.log('single employee data',servicebooked);
        res.send(servicebooked);
    })
}

exports.getServiceBookeddurationID = (req, res)=>{
    //console.log('get emp by id');
    ServiceBooked.getServiceBookedBydurationID(req.params.id, (err, servicebooked)=>{
        if(err)
        res.send(err);
        console.log('single employee data',servicebooked);
        res.send(servicebooked);
    })
}

exports.getServiceBookedpriceID = (req, res)=>{
    //console.log('get emp by id');
    ServiceBooked.getServiceBookedBypriceID(req.params.id, (err, servicebooked)=>{
        if(err)
        res.send(err);
        console.log('single employee data',servicebooked);
        res.send(servicebooked);
    })
}

// create new employee
exports.createNewServiceBooked = (req, res) =>{
    const serviceBookedeReqData = new ServiceBooked(req.body);
    console.log('serviceBookedeReqData', serviceBookedeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ServiceBooked.createServiceBooked(serviceBookedeReqData, (err, servicebooked)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Service Booked Created Successfully', data: servicebooked.insertId})
        })
    }
}

// update employee
exports.updateServiceBooked = (req, res)=>{
    const serviceBookedeReqData = new ServiceBooked(req.body);
    console.log('serviceBookedeReqData update', serviceBookedeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ServiceBooked.updateServiceBooked(req.params.id, serviceBookedeReqData, (err, servicebooked)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'ServiceBooked updated Successfully'})
        })
    }
}

//employee = servicebooked
// delete employee
exports.deleteServiceBooked = (req, res)=>{
    ServiceBooked.deleteServiceBooked(req.params.id, (err, servicebooked)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'ServiceBooked deleted successully!'});
    })
}