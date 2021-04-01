var dbConn  = require('../../config/db.config');

var Patient = function(patient){
    this.patientID          =   patient.patientID;
    this.firstName          =   patient.firstName;
    this.lastName           =   patient.lastName;
    this.dateOfBirth        =   patient.dateOfBirth;
    this.bloodType          =   patient.bloodType;
    this.sex                =   patient.sex;
    this.insurance          =   patient.insurance;
}

// get all patients
Patient.getAllPatient = (result) =>{
    dbConn.query('SELECT * FROM patient', (err, res)=>{
        if(err){
            console.log('Error while fetching patient', err);
            result(err,err);
        }else{
            console.log('Patients fetched successfully');
            result(null,res);
        }
    })
}

// get patient by ID from DB
Patient.getPatientByID = (id, result)=>{
    dbConn.query('SELECT * FROM patient WHERE patientID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching patient by id', err);
            result(err, err);
        }else{
            result(null, res);
        }
    })
}

// create new patient
Patient.createPatient = (patientReqData, result) =>{
    dbConn.query('INSERT INTO patient SET ? ', patientReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(err, err);
        }else{
            console.log('Patient created successfully');
            result(null, res)
        }
    })
}

// update patient
Patient.updatePatient = (id, patientReqData, result)=>{
    dbConn.query("UPDATE patient SET firstName=?,lastName=?,dateOfBirth=?,bloodType=?,sex=?,insurance=? WHERE patientID=?", [patientReqData.firstName,patientReqData.lastName,patientReqData.dateOfBirth,patientReqData.bloodType,patientReqData.sex,patientReqData.insurance, id], (err, res)=>{
        if(err){
            console.log('Error while updating the patient');
            result(err, err);
        }else{
            console.log("Patient updated successfully");
            result(null, res);
        }
    });
}

// delete patient
Patient.deletePatient = (id, result)=>{
    dbConn.query('DELETE FROM patient WHERE patientID=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the patient');
            result(err, err);
        }else{
            result(null, res);
        }
    })
    // dbConn.query("UPDATE patient SET is_deleted=? WHERE patientID = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the patient');
    //         result(err, err);
    //     }else{
    //         console.log("patient deleted successfully");
    //         result(null, res);
    //     }
    // });
}

module.exports = Patient;