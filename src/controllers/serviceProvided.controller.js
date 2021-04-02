
const e = require('express');
const ServiceProvidedModel = require('../models/serviceProvided.model');

// get all employee list
exports.getServiceProvidedList = (req, res)=> {
    //console.log('here all serviceProvided list');
    ServiceProvidedModel.getAllServiceProvided((err, serviceProvided) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('ServiceProvided:', serviceProvided);
        res.send(serviceProvided)
    })
}

// get serviceProvided by ID
exports.getServiceProvidedByID = (req, res)=>{
    //console.log('get emp by id');
    ServiceProvidedModel.getServiceProvidedByID(req.params.id, (err, serviceProvided)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Single ServiceProvided Data',serviceProvided);
        res.send(serviceProvided);
    })
}

// create new serviceProvided
exports.createNewServiceProvided = (req, res) =>{
    const serviceProvidedReqData = new ServiceProvidedModel(req.body);
    console.log('serviceProvidedReqData', serviceProvidedReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ServiceProvidedModel.createServiceProvided(serviceProvidedReqData, (err, serviceProvided)=>{
            if(err)
            res.json({status: false, message: err});
            else
                res.json({status: true, message: 'ServiceProvided Created Successfully', data: serviceProvided.insertId});
        })
    }
}

// update serviceProvided
exports.updateServiceProvided = (req, res)=>{
    const serviceProvidedReqData = new ServiceProvidedModel(req.body);
    console.log('serviceProvidedReqData update', serviceProvidedReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        ServiceProvidedModel.updateServiceProvided(req.params.id, serviceProvidedReqData, (err, serviceProvided)=>{
            if(err)
            res.json({status: false, message: err});
            else
                res.json({status: true, message: 'ServiceProvided updated Successfully'});
        })
    }
}

// delete serviceProvided
exports.deleteServiceProvided = (req, res)=>{
    ServiceProvidedModel.deleteServiceProvided(req.params.id, (err, serviceProvided)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'ServiceProvided deleted successully!'});
    })
}