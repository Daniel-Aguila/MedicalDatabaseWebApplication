var dbConn  = require('../../config/db.config');

var Invoice = function(invoice){
    this.lateFee       =   invoice.lateFee;
    this.gracePeriod   =   invoice.gracePeriod;
    this.priceFinal    =   invoice.priceFinal;
    this.priceExpected =   invoice.priceExpected;
    this.appointmentId =   invoice.appointmentId;
    this.billingID     =   invoice.billingID;
    
}

// get all invoices
Invoice.getAllInvoices = (result) =>{
    dbConn.query('SELECT * FROM invoice', (err, res)=>{
        if(err){
            console.log('Error while fetching invoices', err);
            result(err,err);
        }else{
            console.log('invoices fetched successfully');
            result(null,res);
        }
    })
}

// get invoice by ID from DB
Invoice.getInvoiceByID = (id, result)=>{
    dbConn.query('SELECT * FROM invoice WHERE billingID=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching invoice by id', err);
            result(err, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
Invoice.createInvoice = (invoiceReqData, result) =>{
    console.log(invoiceReqData);
    dbConn.query('INSERT INTO invoice SET ? ', invoiceReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(err, err);
        }else{
            console.log('invoice created successfully');
            result(null, res)
        }
    })
}

// update employee
Invoice.updateInvoice = (id, invoiceReqData, result)=>{
    console.log("Updating invoice now");
    dbConn.query("UPDATE invoice SET billingID=?,lateFee=?,appointmentId=?, priceExpected =?, priceFinal=?, gracePeriod=? WHERE invoiceID = ?", 
    [
        invoiceReqData.billingID,
        invoiceReqData.lateFee,
        invoiceReqData.appointmentId,
        invoiceReqData.priceExpected,
        invoiceReqData.priceFinal,
        invoiceReqData.gracePeriod,
        id

    ], (err, res)=>{
        if(err){
            console.log('Error while updating the invoice');
            result(err, err);
        }else{
            console.log("invoice updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Invoice.deleteInvoice = (id, result)=>{
    dbConn.query('DELETE FROM invoice WHERE invoiceID=?', id, (err, res)=>{
        if(err){
            console.log('Error while deleting the invoice');
            result(null, err);
        }else{
            console.log('invoice deleted successfully');
            result(null, res);
        }
    })
}

module.exports = Invoice;