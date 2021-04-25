const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { json } = require('body-parser');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
});

exports.scheduleAppointment = (req,res)=>{

    const {startTime, date, doctor} = req.body; 
    console.log(date, startTime);
    
    db.query('SELECT doctorID FROM doctor WHERE lastName = ?', [doctor], async(error, results) => {
        if(error){
            console.log(error);
        }
        else{
            dateTime = date + ' ' + startTime;
            console.log(dateTime);
            db.query('INSERT INTO appointments SET ?', {doctorID:results[0].doctorID, startTime:dateTime}, async(error, results1) => {
                if(error){
                    console.log(error);
                }
                else{
                    res.render('patientScheduleAppointment', {
                        message: 'Appointment Scheduled successfully'
                    });
                }
            });
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
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments WHERE patientID = ?', [decoded.id], (error, results)=>{
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

exports.viewAppointmentByIDTEMP = (req,res)=>{
    console.log("RUNS");
    const {startTime, endTime} = req.params;
    console.log(req.url)
    db.query('SELECT appointments.appointmentID, offices.address, appointments.startTime, appointments.endTimeExpected, patient.firstName, patient.lastName FROM appointments INNER JOIN offices ON offices.officeID = appointments.officeID INNER JOIN patient ON appointments.patientID = patient.patientID WHERE startTime BETWEEN ? AND ?;',[startTime, endTime] , (error, results)=>{
        // res.render('reportAppointmentRoute');
        // console.log(results);
        res.json(results);
        // res.render('reportAppointmentRoute', {
        //     message: results
        // })
    });
}

exports.viewAppointmentByIDTEMPpatient = (req,res)=>{
    console.log("RUNS PATIENT");
    const {startTime, endTime} = req.params;
    console.log(req.url)
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    
    console.log("GOT ID: ", decoded.id);
    db.query('SELECT appointments.appointmentID, offices.address, appointments.startTime, appointments.endTimeExpected, doctor.firstName, doctor.lastName FROM appointments INNER JOIN offices ON offices.officeID = appointments.officeID INNER JOIN doctor ON appointments.doctorID = doctor.doctorID WHERE patientID = ? AND startTime BETWEEN ? AND ?;',[decoded.id, startTime, endTime] , (error, results)=>{
        // res.render('reportAppointmentRoute');
        // console.log(results);
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

exports.paramsTEMP = (req,res)=>{
    console.log("TEMP PARAMS!");
    const {startTime, endTime} = req.query;
    console.log(req.query)
    db.query('SELECT appointments.appointmentID, appointments.startTime, appointments.endTime, patient.firstName, patient.lastName, offices.address FROM appointments INNER JOIN offices ON offices.officeID = appointments.officeID INNER JOIN patient ON appointments.patientID = patient.patientID WHERE startTime BETWEEN ? AND ?;',[startTime, endTime] , (error, results)=>{
        res.render('reportAppointmentDoctorRoute', {
            start: startTime,
            end: endTime
        })
        // res.render('reportAppointmentRoute');
        // res.json(results);
    });
}

exports.paramsTEMPpatient = (req,res)=>{
    console.log("TEMP PARAMS! PATIENT");
    const {startTime, endTime} = req.query;
    console.log(req.query)
    db.query('SELECT appointments.appointmentID, offices.address, appointments.startTime, appointments.endTimeExpected, doctor.firstName, doctor.lastName FROM appointments INNER JOIN offices ON offices.officeID = appointments.officeID INNER JOIN doctor ON appointments.doctorID = doctor.doctorID WHERE startTime BETWEEN ? AND ?;',[startTime, endTime] , (error, results)=>{
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
    try {
        db.query('SELECT * FROM offices WHERE state = ?', [state], (error, results)=>{
        })
    }
    catch(error) {
        res.render('reportOffices', {
            message: "Invalid Parameters"
        })
    }
    db.query('SELECT * FROM offices WHERE state = ? AND vaccineAvailable = ?',[state, vaccineAvailable] , (error, results)=>{
        if (Object.keys(results).length == 0) {
            res.render('reportOffices', {
                message: "Invalid Parameters"
            })
        }
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
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    console.log("HERE")
    console.log(req.body);
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments WHERE isCancelled IS NULL', (error, results)=>{
        res.json(results);
    });
}

exports.viewActiveAppointmentsForDoctor = (req,res)=>{

    const {patientID} = req.body;
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    console.log("DOCTOR ID: ", decoded.id);
    console.log(req.body);
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments WHERE doctorID = ?', [decoded.id], (error, results)=>{
        res.json(results);
    });
}

exports.getDoctorName = (req,res)=>{
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    console.log("DOCTOR ID: ", decoded.id);
    console.log(req.body);
    db.query('SELECT lastName FROM doctor WHERE doctorID = ?', [decoded.id], (error, results)=>{
        res.json(results);
    });
}