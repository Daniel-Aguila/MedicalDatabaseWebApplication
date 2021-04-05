const AppointmentsModel = require('../models/appointments.model.js');

// get all appointments list
exports.getAppointmentsList = (req, res)=> {
    //console.log('here all specialities list');
    AppointmentsModel.getAllAppointments((err, appointments) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('appointments', appointments);
        res.send(appointments)
    })
}

// get appointments by ID
exports.getAppointmentsByID = (req, res)=>{
    //console.log('get emp by id');
    AppointmentsModel.getAppointmentsByID(req.params.id, (err, appointments)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single appointments data',appointments);
        res.send(appointments);
    })
}

// create new appointments
exports.createNewAppointments = (req, res) =>{
    console.log("createNewAppointments");
    const appointmentsReqData = new AppointmentsModel(req.body);
    console.log('appointmentsReqData', appointmentsReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        AppointmentsModel.createAppointments(appointmentsReqData, (err, appointments)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'appointments Created Successfully', data: appointments.insertId})
        })
    }
}

// update appointments
exports.updateAppointments = (req, res)=>{
    console.log("Update a appointments");
    const appointmentsReqData = new AppointmentsModel(req.body);
    console.log('appointmentsReqData update', appointmentsReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        AppointmentsModel.updateAppointments(req.params.id, appointmentsReqData, (err, Appointments)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'appointments updated Successfully'})
        })
    }
}

// delete appointments
exports.deleteAppointments = (req, res)=>{
    AppointmentsModel.deleteAppointments(req.params.id, (err, Appointments)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'Appointments deleted successully!'});
    })
}