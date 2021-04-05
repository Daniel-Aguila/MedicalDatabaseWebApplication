
const InvoiceModel = require('../models/invoice.model.js');

// get all invoice list
exports.getInvoiceList = (req, res)=> {
    //console.log('here all invoices list');
    
    InvoiceModel.getAllInvoices((err, invoice) =>{
        console.log('We are here');
        if(err)
        res.json({status: false, message: err});
        else
        console.log('invoices', invoice);
        res.send(invoice)
    })
}

// get invoice by ID
exports.getInvoiceByID = (req, res)=>{
    //console.log('get emp by id');
    InvoiceModel.getInvoiceByID(req.params.id, (err, invoice)=>{
        if(err)
        res.json({status: false, message: err});
        else
        console.log('single invoice data',invoice);
        res.send(invoice);
    })
}

// create new invoice
exports.createNewInvoice = (req, res) =>{
    console.log("createNewInvoice");
    const invoiceReqData = new InvoiceModel(req.body);
    console.log('invoiceReqData', invoiceReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        InvoiceModel.createInvoice(invoiceReqData, (err, invoice)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'invoice Created Successfully', data: invoice.insertId})
        })
    }
}

// update invoice
exports.updateInvoice = (req, res)=>{
    console.log("Update a invoice");
    const invoiceReqData = new InvoiceModel(req.body);
    console.log('invoiceReqData update', invoiceReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        InvoiceModel.updateInvoice(req.params.id, invoiceReqData, (err, Invoice)=>{
            if(err)
            res.json({status: false, message: err});
            else
            res.json({status: true, message: 'invoice updated Successfully'})
        })
    }
}

// delete invoice
exports.deleteInvoice = (req, res)=>{
    InvoiceModel.deleteInvoice(req.params.id, (err, Invoice)=>{
        if(err)
        res.json({status: false, message: err});
        else
        res.json({success:true, message: 'invoice deleted successully!'});
    })
}