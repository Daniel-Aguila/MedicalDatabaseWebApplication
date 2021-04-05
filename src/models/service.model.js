var dbConn  = require('../../config/db.config');

var Service = function(service){
    this.serviceID      =   service.serviceID;
    this.serviceTypeID  =   service.serviceTypeID;
    this.serviceName    =   service.serviceName;
    this.price          =   service.price;
    
}

// get all services
Service.getAllServices = (result) =>{
    dbConn.query('SELECT * FROM service', (err, res)=>{
        if(err){
            console.log('Error while fetching services', err);
            result(err,err);
        }else{
            console.log('services fetched successfully');
            result(null,res);
        }
    })
}

// get service by ID from DB
Service.getServiceByID = (id, result)=>{
    dbConn.query('SELECT * FROM service WHERE serviceID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching service by id', err);
            result(err, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
Service.createService = (serviceReqData, result) =>{
    console.log(serviceReqData);
    dbConn.query('INSERT INTO service SET ? ', serviceReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(err, err);
        }else{
            console.log('service created successfully');
            result(null, res)
        }
    })
}

// update employee
Service.updateService = (id, serviceReqData, result)=>{
    console.log("Updating service now");
    dbConn.query("UPDATE service SET serviceTypeID=?,serviceName=?,price=? WHERE serviceID = ?", 
    [
        // serviceReqData.serviceID ,
        serviceReqData.serviceTypeID,
        serviceReqData.serviceName,
        serviceReqData.price, 
        id
    ], (err, res)=>{
        if(err){
            console.log('Error while updating the service');
            result(err, err);
        }else{
            console.log("service updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Service.deleteService = (id, result)=>{
    dbConn.query('DELETE FROM service WHERE serviceID=?', id, (err, res)=>{
        if(err){
            console.log('Error while deleting the service');
            result(err, err);
        }else{
            console.log('Service deleted successfully');
            result(null, res);
        }
    })
}

module.exports = Service;