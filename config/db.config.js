const mysql = require('mysql');

// create here mysql connection

const dbConn = mysql.createConnection({
    host: '178.128.70.9',
    user: 'test',
    password: 'bar',
    database: 'mydb'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = dbConn;
