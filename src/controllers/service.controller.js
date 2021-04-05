
const ServiceModel = require('../models/service.model.js');

// get all service list
exports.getServiceList = (req, res)=> {
    //console.log('here all services list');
    ServiceModel.getAllServices((err, service) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('services', service);
        res.send(service)
    })
}

// get service by ID
exports.getServiceByID = (req, res)=>{
    //console.log('get emp by id');
    ServiceModel.getServiceByID(req.params.id, (err, service)=>{
        if(err)
        res.json({status: false, message: err, data: service.insertId});
        else
        console.log('single service data',service);
        res.send(service);
    })
}

// create new service
exports.createNewService = (req, res) =>{
    console.log("createNewService");
    const serviceReqData = new ServiceModel(req.body);
    console.log('serviceReqData', serviceReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ServiceModel.createService(serviceReqData, (err, service)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'service Created Successfully', data: service.insertId})
        })
    }
}

// update service
exports.updateService = (req, res)=>{
    console.log("Update a service");
    const serviceReqData = new ServiceModel(req.body);
    console.log('serviceReqData update', serviceReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ServiceModel.updateService(req.params.id, serviceReqData, (err, Service)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'service updated Successfully'})
        })
    }
}

// delete service
exports.deleteService = (req, res)=>{
    ServiceModel.deleteService(req.params.id, (err, Service)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'service deleted successully!'});
    })
}