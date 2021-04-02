var dbConn  = require('../../config/db.config');

var vaccinations = function(employee){
    this.vaccineID = employee.vaccineID;
    this.quantity = employee.quantity;
}

// get all employees
vaccinations.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM vaccinations', (err, res)=>{
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
vaccinations.getEmployeeByID = (id, result)=>{
    dbConn.query('SELECT * FROM vaccinations WHERE vaccineID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
vaccinations.createEmployee = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO vaccinations SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('vaccinations created successfully');
            result(null, res)
        }
    })
}

// update employee
vaccinations.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE vaccinations SET vaccineID=?, quantity=? WHERE vaccineID = ?",[employeeReqData.vaccineID,employeeReqData.quantity, employeeReqData.vaccineID], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("vaccinations updated successfully");
            result(null, res);
        }
    });
}

// delete employee
vaccinations.deleteEmployee = (id, result)=>{
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
            console.log("vaccinations deleted successfully");
            result(null, res);
        }
    });
}

module.exports = vaccinations;