const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
})

exports.scheduleAppointment = (req,res)=>{

    const {startTime, date, doctor} = req.body;
    console.log(time, date, doctor);
    res.render('patientScheduleAppointment', {
        message: 'Appointment Scheduled successfully'
    })
    // db.query('INSERT INTO appointments SET ?', req, async(error, results) => {
    //     if(error){
    //         console.log(error);
    //     }
    //     else{
    //         console.log(results);
    //     }
    // });
}

exports.cancelAppointment = (req,res)=>{
    const {appointmentID, startTime, endTime, doctorID} = req.body;
    db.query('UPDATE appointments SET ? WHERE appointmentID=?', [{isCancelled:1}, appointmentID], async(error, results) => {
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
    });
}

exports.viewAllAppointments = (req,res)=>{

    const {patientID} = req.body;
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments', (error, results)=>{
        res.json(results);
    });
}

exports.viewAllDoctors = (req,res)=>{

    const {doctorID} = req.body;
    db.query('SELECT doctorID, firstName, lastName, Email FROM doctor', (error, results)=>{
        res.json(results);
    });
}

exports.viewAllPatients = (req,res)=>{

    const {patientID} = req.body;
    db.query('SELECT patientID, firstName, lastName, dateOfBirth, bloodType from patient', (error, results)=>{
        res.json(results);
    });
}

exports.viewAppointmentByID = (req,res)=>{

    const {startTime, endTime} = req.body;
    console.log("RUNS");
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments WHERE startTime BETWEEN ? AND ?',[startTime, endTime] , (error, results)=>{
        res.json(results);
        // res.render('reportAppointmentRoute', {
        //     message: results
        // })
    });
}

exports.viewActiveAppointments = (req,res)=>{

    const {patientID} = req.body;
    console.log("HERE")
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments WHERE isCancelled IS NULL', (error, results)=>{
        res.json(results);
    });
}