var dbConn  = require('../../config/db.config');

var Prescription = function(prescription){
    this.prescriptionID         =   prescription.prescriptionID;
    this.totalPrescriptions     =   prescription.totalPrescriptions;
    this.prescriptionHistory    =   prescription.prescriptionHistory;
}

// get all prescriptions
Prescription.getAllPrescription = (result) =>{
    dbConn.query('SELECT * FROM prescriptions', (err, res)=>{
        if(err){
            console.log('Error while fetching prescription', err);
            result(err,err);
        }else{
            console.log('Prescriptions fetched successfully');
            result(null,res);
        }
    })
}

// get prescription by ID from DB
Prescription.getPrescriptionByID = (id, result)=>{
    dbConn.query('SELECT * FROM prescriptions WHERE prescriptionID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching prescription by id', err);
            result(err, err);
        }else{
            result(null, res);
        }
    })
}

// create new prescription
Prescription.createPrescription = (prescriptionReqData, result) =>{
    dbConn.query('INSERT INTO prescriptions SET ? ', prescriptionReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(err, err);
        }else{
            console.log('Prescription created successfully');
            result(null, res)
        }
    })
}

// update prescription
Prescription.updatePrescription = (id, prescriptionReqData, result)=>{
    dbConn.query("UPDATE prescriptions SET totalPrescriptions=?,prescriptionHistory=? WHERE prescriptionID=?", [prescriptionReqData.totalPrescriptions,prescriptionReqData.prescriptionHistory, id], (err, res)=>{
        if(err){
            console.log('Error while updating the prescription');
            result(err, err);
        }else{
            console.log("Prescription updated successfully");
            result(null, res);
        }
    });
}

// delete prescription
Prescription.deletePrescription = (id, result)=>{
    dbConn.query('DELETE FROM prescriptions WHERE prescriptionID=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the prescription');
            result(err, err);
        }else{
            result(null, res);
        }
    })
    // dbConn.query("UPDATE prescription SET is_deleted=? WHERE prescriptionID = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the prescription');
    //         result(err, err);
    //     }else{
    //         console.log("prescription deleted successfully");
    //         result(null, res);
    //     }
    // });
}

module.exports = Prescription;