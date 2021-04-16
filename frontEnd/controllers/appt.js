const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
})

exports.cancelAppt = (req,res)=>{

    const {appointmentID, startTime, doctorID} = req.body;
    db.query('UPDATE FROM appointments WHERE appointmentID = ?', [{isCancelled:1}, appointmentID], async(error, results) => {
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
    });
}

exports.viewAppts = (req,res)=>{

    const {patientID} = req.body;
    db.query('SELECT appointmentID, startTime, endTime, doctorID FROM appointments', (error, results)=>{
        res.json(results);
    });

}