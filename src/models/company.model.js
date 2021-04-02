var dbConn  = require('../../config/db.config');

var Company = function(Company){
    this.officeID       =   Company.officeID;
}

// get all Companys
Company.getAllCompanys = (result) =>{
    dbConn.query('SELECT * FROM Company', (err, res)=>{
        if(err){
            console.log('Company while fetching Company', err);
            result(null,err);
        }else{
            console.log('Company fetched successfully');
            result(null,res);
        }
    })
}


Company.getCompanyByofficeID = (id, result)=>{
    dbConn.query('SELECT * FROM Company WHERE officeID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching Company by officeID', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new Company
Company.createCompany = (CompanyReqData, result) =>{
    dbConn.query('INSERT INTO Company SET ? ', CompanyReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Company created successfully');
            result(null, res)
        }
    })
}

// update Company
Company.updateCompany = (id, CompanyReqData, result)=>{
    dbConn.query("UPDATE Company SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [CompanyReqData.first_name,CompanyReqData.last_name,CompanyReqData.email,CompanyReqData.phone,CompanyReqData.organization,CompanyReqData.designation,CompanyReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the Company');
            result(null, err);
        }else{
            console.log("Company updated successfully");
            result(null, res);
        }
    });
}

// delete Company
Company.deleteCompany = (id, result)=>{
    // dbConn.query('DELETE FROM Companys WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the Company');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE Company SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the Company');
            result(null, err);
        }else{
            console.log("Company deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Company;