const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { json } = require('body-parser');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
})

exports.scheduleAppointment = (req,res)=>{

    const {time, date, doctor} = req.body;
    console.log(time);
    console.log(time, date, doctor);
    let temp = date + " 10:23:21"
    console.log(temp);
    console.log('INSERT INTO appointments SET ?', {startTime:temp,createdDate:date});

    db.query('SELECT firstName FROM doctor', (error,results) =>{
        
    });

    db.query('INSERT INTO appointments SET ?', {startTime:temp,createdDate:date}, async(error, results) => {
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            res.render('patientScheduleAppointment', {
                message: 'Appointment Scheduled successfully'
            })
        }
    });
}

exports.cancelAppointment = (req,res)=>{
    const {appointmentID, startTime, endTime, doctorID} = req.body;
    db.query('UPDATE appointments SET ? WHERE appointmentID=?', [{isCancelled:0}, appointmentID], async(error, results) => {
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
    console.log("RUNS");
    const {startTime, endTime} = req.params;
    console.log(req.url)
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments WHERE startTime BETWEEN ? AND ?',[startTime, endTime] , (error, results)=>{
        // res.render('reportAppointmentRoute');
        res.json(results);
        // res.render('reportAppointmentRoute', {
        //     message: results
        // })
    });
}

exports.viewOfficeReport = (req,res)=>{
    console.log("RUNS");
    const {state, vaccineAvailable} = req.params;
    console.log(req.url)
    db.query('SELECT * FROM offices WHERE state = ? AND vaccineAvailable = ?', [state, vaccineAvailable] , (error, results)=>{
        // res.render('reportAppointmentRoute');
        console.log(results);
        res.json(results);
        // res.render('reportAppointmentRoute', {
        //     message: results
        // })
    });
}

exports.viewPatientReport = (req,res)=>{
    console.log("RUNS");
    const {startTime, endTime, blood} = req.params;
    console.log(req.url)
    db.query('SELECT * FROM patient WHERE dateOfBirth BETWEEN ? AND ? AND bloodType = ?',[startTime, endTime, blood] , (error, results)=>{
        // res.render('reportAppointmentRoute');
        console.log(results);
        res.json(results);
        // res.render('reportAppointmentRoute', {
        //     message: results
        // })
    });
}

exports.params = (req,res)=>{
    console.log("PARAMS!");
    const {startTime, endTime} = req.query;
    console.log(req.query)
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments WHERE startTime BETWEEN ? AND ?',[startTime, endTime] , (error, results)=>{
        res.render('reportAppointmentRoute', {
            start: startTime,
            end: endTime
        })
        // res.render('reportAppointmentRoute');
        // res.json(results);
    });
}

exports.doctorParams = (req,res)=>{
    console.log("DocPARAMS!");
    const {startTime, endTime, bloodType} = req.query;
    console.log(req.query)
    db.query('SELECT * FROM patient WHERE dateOfBirth BETWEEN ? AND ? AND bloodType = ?',[startTime, endTime, bloodType] , (error, results)=>{
        console.log(bloodType)
        res.render('reportPatientsRoute', {
            start: startTime,
            end: endTime,
            blood: bloodType
        })
        // res.render('reportAppointmentRoute');
        // res.json(results);
    });
}

exports.officeParams = (req,res)=>{
    console.log("OfficesPARAMS!");
    const {state, vaccineAvailable} = req.query;
    console.log(req.query)
    db.query('SELECT * FROM offices WHERE state = ? AND vaccineAvailable = ?',[state, vaccineAvailable] , (error, results)=>{
        res.render('reportOfficesRoute', {
            state: state,
            vaccineAvailable: vaccineAvailable
        })
        // res.render('reportAppointmentRoute');
        // res.json(results);
    });
}

exports.viewActiveAppointments = (req,res)=>{

    const {patientID} = req.body;

    console.log("HERE")
//abf8cc8132b0a6342b1391cf00b0e2a26327ad09
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments WHERE isCancelled = 1', (error, results)=>{
        res.json(results);
    });
}