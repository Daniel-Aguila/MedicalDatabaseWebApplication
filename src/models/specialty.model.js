var dbConn  = require('../../config/db.config');

var Specialty = function(specialty){
    this.doctorID       =   specialty.doctorID;
    this.general        =   specialty.general;
    this.psychiatry     =   specialty.psychiatry;
    this.surgeon        =   specialty.surgeon;
}

// get all specialtys
Specialty.getAllSpecialty = (result) =>{
    dbConn.query('SELECT * FROM specialty', (err, res)=>{
        if(err){
            console.log('Error while fetching specialities', err);
            result(err,err);
        }else{
            console.log('specialities fetched successfully');
            result(null,res);
        }
    })
}

// get specialty by ID from DB
Specialty.getSpecialtyByID = (id, result)=>{
    dbConn.query('SELECT * FROM specialty WHERE doctorID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching specialty by id', err);
            result(err, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
Specialty.createSpecialty = (specialtyReqData, result) =>{
    dbConn.query('INSERT INTO specialty SET ? ', specialtyReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(err, err);
        }else{
            console.log('specialty created successfully');
            result(null, res)
        }
    })
}

// update employee
Specialty.updateSpecialty = (id, specialtyReqData, result)=>{
    console.log("Updating specialty now");
    dbConn.query("UPDATE specialty SET doctorID=?,general=?,surgeon=?,psychiatry=? WHERE doctorID = ?", 
    [
        specialtyReqData.doctorID,
        specialtyReqData.general,
        specialtyReqData.surgeon,
        specialtyReqData.psychiatry,
        id
       
    ], (err, res)=>{
        if(err){
            console.log('Error while updating the specialty');
            result(err, err);
        }else{
            console.log("specialty updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Specialty.deleteSpecialty = (id, result)=>{
    
    dbConn.query('DELETE FROM specialty WHERE doctorID=?', id, (err, res)=>{
        if(err){
            console.log('Error while deleting the specialty');
            result(err, err);
        }else{
            console.log("specialty deleted");
            result(null, res);
        }
    })
}

module.exports = Specialty;