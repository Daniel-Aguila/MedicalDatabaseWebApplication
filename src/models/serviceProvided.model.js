var dbConn  = require('../../config/db.config');

var ServiceProvided = function(serviceProvided){
    this.appointmentID          =   serviceProvided.appointmentID;
    this.serviceID          =   serviceProvided.serviceID;
    this.duration           =   serviceProvided.duration;
    this.price        =   serviceProvided.price;
}

// get all serviceProvideds
ServiceProvided.getAllServiceProvided = (result) =>{
    dbConn.query('SELECT * FROM serviceProvided', (err, res)=>{
        if(err){
            console.log('Error while fetching serviceProvided', err);
            result(err,err);
        }else{
            console.log('ServiceProvideds fetched successfully');
            result(null,res);
        }
    })
}

// get serviceProvided by ID from DB
ServiceProvided.getServiceProvidedByID = (id, result)=>{
    dbConn.query('SELECT * FROM serviceProvided WHERE serviceProvidedID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching serviceProvided by id', err);
            result(err, err);
        }else{
            result(null, res);
        }
    })
}

// create new serviceProvided
ServiceProvided.createServiceProvided = (serviceProvidedReqData, result) =>{
    dbConn.query('INSERT INTO serviceProvided SET ? ', serviceProvidedReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(err, err);
        }else{
            console.log('ServiceProvided created successfully');
            result(null, res)
        }
    })
}

// update serviceProvided
ServiceProvided.updateServiceProvided = (id, serviceProvidedReqData, result)=>{
    dbConn.query("UPDATE serviceProvided SET appointmentID=?,serviceID=?,duration=?,price=? WHERE serviceID=?", 
    [serviceProvidedReqData.appointmentID,serviceProvidedReqData.serviceID,serviceProvidedReqData.duration,serviceProvidedReqData.price, id], (err, res)=>{
        if(err){
            console.log('Error while updating the serviceProvided');
            result(err, err);
        }else{
            console.log("ServiceProvided updated successfully");
            result(null, res);
        }
    });
}

// delete serviceProvided
ServiceProvided.deleteServiceProvided = (id, result)=>{
    dbConn.query('DELETE FROM serviceProvided WHERE serviceProvidedID=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the serviceProvided');
            result(err, err);
        }else{
            result(null, res);
        }
    })
    // dbConn.query("UPDATE serviceProvided SET is_deleted=? WHERE serviceProvidedID = ?", [1, id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the serviceProvided');
    //         result(err, err);
    //     }else{
    //         console.log("serviceProvided deleted successfully");
    //         result(null, res);
    //     }
    // });
}

module.exports = ServiceProvided;