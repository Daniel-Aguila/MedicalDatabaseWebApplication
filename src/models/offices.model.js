var dbConn  = require('../../config/db.config');

var offices = function(employee){
    // this.first_name     =   employee.first_name;
    // this.last_name      =   employee.last_name;
    // this.email          =   employee.email;
    // this.phone          =   employee.phone;
    // this.organization   =   employee.organization;
    // this.designation    =   employee.designation;
    // this.salary         =   employee.salary;
    // this.status         =   employee.status ? employee.status : 1;
    // this.created_at     =   new Date();
    // this.updated_at     =   new Date();

    this.officeID = employee.officeID;
    this.doctorID = employee.doctorID;
    this.address = employee.address;
    this.phonenumber = employee.phonenumber;
    this.vaccineAvailable = employee.vaccineAvailable;
    this.state = employee.state;
}

// get all employees
offices.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM offices', (err, res)=>{
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
offices.getEmployeeByID = (id, result)=>{
    dbConn.query('SELECT * FROM offices WHERE officeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employee by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
offices.createEmployee = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO offices SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('offices created successfully');
            result(null, res)
        }
    })
}

// update employee
offices.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE offices SET officeID=?,doctorID=?,address=?,phonenumber=?,vaccineAvailable=?,state=? WHERE officeID = ?", [employeeReqData.officeID,employeeReqData.doctorID,employeeReqData.address,employeeReqData.phonenumber,employeeReqData.vaccineAvailable,employeeReqData.state, employeeReqData.officeID], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("offices updated successfully");
            result(null, res);
        }
    });
}

// delete employee
offices.deleteEmployee = (id, result)=>{
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
            console.log("offices deleted successfully");
            result(null, res);
        }
    });
}

module.exports = offices;