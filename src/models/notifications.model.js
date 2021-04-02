var dbConn  = require('../../config/db.config');

var notifications = function(employee){
    this.notificationID = employee.notificationID;
    this.time = employee.time;
    this.userID = employee.userID;
    this.message = employee.message;
}

// get all employees
notifications.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM notifications', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('Employees fetched successfully');
            result(null,res);
        }
    })
}

// get employee by ID from DB
notifications.getEmployeeByID = (id, result)=>{
    dbConn.query('SELECT * FROM notifications WHERE notificationID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
notifications.createEmployee = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO notifications SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('notifications created successfully');
            result(null, res)
        }
    })
}

// update employee
notifications.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE notifications SET notificationID=?,time=?,userID=?,message=? WHERE notificationID = ?",[employeeReqData.notificationID,employeeReqData.time,employeeReqData.userID,employeeReqData.message, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("notifications updated successfully");
            result(null, res);
        }
    });
}

// delete employee
notifications.deleteEmployee = (id, result)=>{
    // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the employee');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the employee');
            result(null, err);
        }else{
            console.log("notifications deleted successfully");
            result(null, res);
        }
    });
}

module.exports = notifications;