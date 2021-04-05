var dbConn  = require('../../config/db.config');

var Appointments = function(appointments){
    this.appointmentID  =   appointments.appointmentID;
    this.patientID      =   appointments.patientID;
    this.doctorID       =   appointments.doctorID;
    this.billingID      =   appointments.billingID;
    this.getTotalAppointments =appointments.getTotalAppointments;
    this.isCancelled    = appointments.isCancelled;
    this.endTime        = appointments.endTime;
    this.endTimeExpected = appointments.endTimeExpected;
    this.startTime      = appointments.startTime;
    this.updatedby      = appointments.updatedby;
    this.updatedate     = appointments.updatedate;
    this.createdDate    = appointments.createdDate;
    this.createdBy      = appointments.createdBy;
}


// get all appointmentss
Appointments.getAllAppointments = (result) =>{
    dbConn.query('SELECT * FROM appointments', (err, res)=>{
        if(err){
            console.log('Error while fetching specialities', err);
            result(err,err);
        }else{
            console.log('specialities fetched successfully');
            result(null,res);
        }
    })
}

// get appointments by ID from DB
Appointments.getAppointmentsByID = (id, result)=>{
    dbConn.query('SELECT * FROM appointments WHERE appointmentID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching appointments by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
Appointments.createAppointments = (appointmentsReqData, result) =>{

    dbConn.query('INSERT INTO appointments SET ? ', appointmentsReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('appointments created successfully');
            result(null, res)
        }
    })
}

// update employee
Appointments.updateAppointments = (id, appointmentsReqData, result)=>{
    console.log("Updating appointments now");
    dbConn.query("UPDATE appointments SET patientID=?,doctorID=?,getTotalAppointments=?, isCancelled=?, appointmentID=?, endTime=?, endTimeExpected =?, startTime =?, updatedby=?, updatedate=?, createdDate=?, createdBy=? WHERE appointmentID = ?", 
    [
         
        appointmentsReqData.patientID,
        appointmentsReqData.doctorID,
        appointmentsReqData.getTotalAppointments,
        appointmentsReqData.isCancelled,
        appointmentsReqData.appointmentID, 
        appointmentsReqData.endTime,
        appointmentsReqData.endTimeExpected,
        appointmentsReqData.startTime,
        appointmentsReqData.updatedby,
        appointmentsReqData.updatedate,
        appointmentsReqData.createdDate,
        appointmentsReqData.createdBy,
        id
       
    ], (err, res)=>{
        if(err){
            console.log('Error while updating the appointments');
            result(null, err);
        }else{
            console.log("appointments updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Appointments.deleteAppointments = (id, result)=>{
    
    dbConn.query('DELETE FROM appointments WHERE appointmentID=?', id, (err, res)=>{
        if(err){
            console.log('Error while deleting the appointments');
            result(null, err);
        }else{
            console.log("appointments deleted");
            result(null, res);
        }
    })
}

module.exports = Appointments;