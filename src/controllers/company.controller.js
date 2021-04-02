
const Company = require('../models/company.model');

// get all employee list
exports.getCompanyList = (req, res)=> {
    //console.log('here all employees list');
    Company.getAllCompanys((err, Companys) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('Companys', Companys);
        res.send(employees)
    })
}

// get employee by ID
exports.getCompanyByofficeID = (req, res)=>{
    //console.log('get emp by id');
    Company.getCompanyByofficeID(req.params.id, (err, employee)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single employee data',employee);
        res.send(employee);
    })
}


// create new employee
exports.createNewCompany = (req, res) =>{
    const CompanyeReqData = new Company(req.body);
    console.log('CompanyeReqData', CompanyeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        Company.createCompany(CompanyeReqData, (err, Company)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Service Booked Created Successfully', data: Company.insertId})
        })
    }
}

// update employee
exports.updateCompany = (req, res)=>{
    const CompanyeReqData = new Company(req.body);
    console.log('CompanyeReqData update', CompanyeReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        Company.updateCompany(req.params.id, CompanyeReqData, (err, Company)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Company updated Successfully'})
        })
    }
}

//employee = Company
// delete employee
exports.deleteCompany = (req, res)=>{
    Company.deleteCompany(req.params.id, (err, Company)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Company deleted successully!'});
    })
}