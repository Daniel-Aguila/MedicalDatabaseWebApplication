const express = require('express');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

const db = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
})

db.connect( (error) => {
    if(error){
        console.log(error)
    }
    else{
        console.log("MySQL Connected...")
    }
})

const PORT = 3002;

//publicDirectory is where you put any css or javascript files for the front end to use
const publicDirectory = path.join(__dirname, './public')
console.log(__dirname)

app.use(express.static(publicDirectory));

//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));
//Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());
//app.use(express.static('medilab'));
app.set('view engine', 'hbs');

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Running on: ${PORT}`));