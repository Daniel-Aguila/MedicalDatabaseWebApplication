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

    const {patientID} = req.body;
    db.query('SELECT billingID, priceFinal, dueDate FROM invoice', (error, results)=>{
        res.json(results);
    });
}