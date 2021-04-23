const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
})

exports.viewBilling = (req,res)=>{

    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    db.query('SELECT invoice.billingID, invoice.priceFinal, invoice.dueDate FROM appointments INNER JOIN invoice ON invoice.billingID = appointments.billingID INNER JOIN patient ON appointments.patientID = patient.patientID WHERE patient.patientID = ?;', [decoded.id], (error, results)=>{
        res.json(results);
    });
}