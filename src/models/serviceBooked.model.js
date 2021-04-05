var dbConn  = require('../../config/db.config');

var ServiceBooked = function(ServiceBooked){
    this.appointmentID  =   ServiceBooked.appointmentID;
    this.serviceID      =   ServiceBooked.serviceID;
    this.duration       =   ServiceBooked.duration;
    this.price          =   ServiceBooked.price;
}

// get all ServiceBookeds
ServiceBooked.getAllServiceBookeds = (result) =>{
    dbConn.query('SELECT * FROM serviceBooked', (err, res)=>{
        if(err){
            console.log('serviceBooked while fetching serviceBooked', err);
            result(null,err);
        }else{
            console.log('ServiceBooked fetched successfully');
            result(null,res);
        }
    })
}

// get ServiceBooked by appointmentID from DB
ServiceBooked.getServiceBookedByappointmentID = (id, result)=>{
    dbConn.query('SELECT * FROM serviceBooked WHERE appointmentID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching serviceBooked by appointmentID', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// get ServiceBooked by serviceID from DB
ServiceBooked.getServiceBookedByserviceID = (id, result)=>{
    dbConn.query('SELECT * FROM serviceBooked WHERE serviceID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching serviceBooked by serviceID', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// get ServiceBooked by duration from DB
ServiceBooked.getServiceBookedByduration = (id, result)=>{
    dbConn.query('SELECT * FROM serviceBooked WHERE duration=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching serviceBooked by duration', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// get ServiceBooked by price from DB
ServiceBooked.getServiceBookedByprice = (id, result)=>{
    dbConn.query('SELECT * FROM serviceBooked WHERE price=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching serviceBooked by price', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new ServiceBooked
ServiceBooked.createServiceBooked = (ServiceBookedReqData, result) =>{
    dbConn.query('INSERT INTO serviceBooked SET ? ', ServiceBookedReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('serviceBooked created successfully');
            result(null, res)
        }
    })
}

// update ServiceBooked
ServiceBooked.updateServiceBooked = (id, ServiceBookedReqData, result)=>{
    dbConn.query("UPDATE serviceBooked SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [ServiceBookedReqData.first_name,ServiceBookedReqData.last_name,ServiceBookedReqData.email,ServiceBookedReqData.phone,ServiceBookedReqData.organization,ServiceBookedReqData.designation,ServiceBookedReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the serviceBooked');
            result(null, err);
        }else{
            console.log("serviceBooked updated successfully");
            result(null, res);
        }
    });
}

// delete ServiceBooked
ServiceBooked.deleteServiceBooked = (id, result)=>{
    // dbConn.query('DELETE FROM ServiceBookeds WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the ServiceBooked');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE serviceBooked SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the serviceBooked');
            result(null, err);
        }else{
            console.log("serviceBooked deleted successfully");
            result(null, res);
        }
    });
}

module.exports = ServiceBooked;