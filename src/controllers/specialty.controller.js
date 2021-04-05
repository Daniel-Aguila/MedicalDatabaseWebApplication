const SpecialtyModel = require('../models/specialty.model.js');

// get all specialty list
exports.getSpecialtyList = (req, res)=> {
    //console.log('here all specialities list');
    SpecialtyModel.getAllSpecialty((err, specialty) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('specialty', specialty);
        res.send(specialty)
    })
}

// get specialty by ID
exports.getSpecialtyByID = (req, res)=>{
    //console.log('get emp by id');
    SpecialtyModel.getSpecialtyByID(req.params.id, (err, specialty)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single specialty data',specialty);
        res.send(specialty);
    })
}

// create new specialty
exports.createNewSpecialty = (req, res) =>{
    console.log("createNewSpecialty");
    const specialtyReqData = new SpecialtyModel(req.body);
    console.log('specialtyReqData', specialtyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        SpecialtyModel.createSpecialty(specialtyReqData, (err, specialty)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'specialty Created Successfully', data: specialty.insertId})
        })
    }
}

// update specialty
exports.updateSpecialty = (req, res)=>{
    console.log("Update a specialty");
    const specialtyReqData = new SpecialtyModel(req.body);
    console.log('specialtyReqData update', specialtyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        SpecialtyModel.updateSpecialty(req.params.id, specialtyReqData, (err, Specialty)=>{
            if(err)
            res.json({status: false, message: err})
            else
            res.json({status: true, message: 'specialty updated Successfully'})
        })
    }
}

// delete specialty
exports.deleteSpecialty = (req, res)=>{
    SpecialtyModel.deleteSpecialty(req.params.id, (err, Specialty)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'Specialty deleted successully!'});
    })
}