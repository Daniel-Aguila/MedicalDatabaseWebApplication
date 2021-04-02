var dbConn  = require('../../config/db.config');

var Doctor = function(Doctor){
    this.doctorID       =   Doctor.doctorID;
    this.scheduleID     =   Doctor.scheduleID;
    this.speciality     =   Doctor.Speciality;
    this.isPrimary      =   Doctor.isPrimary;
}

// get all Doctors
Doctor.getAllDoctors = (result) =>{
    dbConn.query('SELECT * FROM doctor', (err, res)=>{
        if(err){
            console.log('Doctor while fetching Doctor', err);
            result(null,err);
        }else{
            console.log('Doctor fetched successfully');
            result(null,res);
        }
    })
}


Doctor.getDoctorBydoctorID = (id, result)=>{
    dbConn.query('SELECT * FROM doctor WHERE doctorID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching Doctor by doctorID', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}


Doctor.getDoctorByscheduleID = (id, result)=>{
    dbConn.query('SELECT * FROM doctor WHERE scheduleID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching Doctor by scheduleID', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

Doctor.getDoctorBySpeciality = (id, result)=>{
    dbConn.query('SELECT * FROM doctor WHERE Speciality=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching Doctor by Speciality', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}


Doctor.getDoctorByisPrimary = (id, result)=>{
    dbConn.query('SELECT * FROM doctor WHERE isPrimary=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching Doctor by isPrimary', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new Doctor
Doctor.createDoctor = (DoctorReqData, result) =>{
    dbConn.query('INSERT INTO doctor SET ? ', DoctorReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Doctor created successfully');
            result(null, res)
        }
    })
}

// update Doctor
Doctor.updateDoctor = (id, DoctorReqData, result)=>{
    dbConn.query("UPDATE doctor SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [DoctorReqData.first_name,DoctorReqData.last_name,DoctorReqData.email,DoctorReqData.phone,DoctorReqData.organization,DoctorReqData.designation,DoctorReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the Doctor');
            result(null, err);
        }else{
            console.log("Doctor updated successfully");
            result(null, res);
        }
    });
}

// delete Doctor
Doctor.deleteDoctor = (id, result)=>{
    // dbConn.query('DELETE FROM Doctors WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the Doctor');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE Doctor SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the Doctor');
            result(null, err);
        }else{
            console.log("Doctor deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Doctor;