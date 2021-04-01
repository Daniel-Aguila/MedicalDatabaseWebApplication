var dbConn  = require('../../config/db.config');

var Staff = function(staff){
    this.staffID        =   staff.staffID;
    this.userName       =   staff.userName;
    this.password       =   staff.password;
    this.firstName      =   staff.firstName;
    this.lastName       =   staff.lastName;
    this.email          =   staff.email;
    this.streetName     =   staff.streetName;   
    this.streetNumber   =   staff.streetNumber;
    this.city           =   staff.city;
    this.state          =   staff.state;
    this.zipCode        =   staff.zipCode;
    this.staffType      =   staff.staffType;
}

// get all staffs
Staff.getAllStaff = (result) =>{
    dbConn.query('SELECT * FROM staff', (err, res)=>{
        if(err){
            console.log('Error while fetching staff', err);
            result(err,err);
        }else{
            console.log('staffs fetched successfully');
            result(null,res);
        }
    })
}

// get staff by ID from DB
Staff.getStaffByID = (id, result)=>{
    dbConn.query('SELECT * FROM staff WHERE staffID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching staff by id', err);
            result(err, err);
        }else{
            result(null, res);
        }
    })
}

// create new staff
Staff.createStaff = (staffReqData, result) =>{
    dbConn.query('INSERT INTO staff SET ? ', staffReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(err, err);
        }else{
            console.log('staff created successfully');
            result(null, res)
        }
    })
}

// update staff
Staff.updateStaff = (id, staffReqData, result)=>{
    dbConn.query("UPDATE staff SET userName=?,password=?,firstName=?,lastName=?,email=?,streetName=?,streetNumber=?,city=?,state=?,zipCode=?,staffType=? WHERE staffID=?", [staffReqData.userName,staffReqData.password,staffReqData.firstName,staffReqData.lastName,staffReqData.email,staffReqData.streetName,staffReqData.streetNumber,staffReqData.city, staffReqData.state, staffReqData.zipCode, staffReqData.staffType, id], (err, res)=>{
        if(err){
            console.log('Error while updating the staff');
            result(err, err);
        }else{
            console.log("staff updated successfully");
            result(null, res);
        }
    });
}

// delete staff
Staff.deleteStaff = (id, result)=>{
    dbConn.query('DELETE FROM staff WHERE staffID=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the staff');
            result(err, err);
        }else{
            result(null, res);
        }
    })
    // dbConn.query("UPDATE staff SET is_deleted=? WHERE staffID = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the staff');
    //         result(err, err);
    //     }else{
    //         console.log("staff deleted successfully");
    //         result(null, res);
    //     }
    // });
}

module.exports = Staff;