const express = require('express')
const router = express.Router();

const invoiceController = require('../controllers/invoice.controller');

// get all employees
router.get('/', invoiceController.getInvoiceList);

// get employee by ID
router.get('/:id',invoiceController.getInvoiceByID);

// create new employee
router.post('/', invoiceController.createNewInvoice);

// update employee
router.put('/:id', invoiceController.updateInvoice);

// delete employee
router.delete('/:id',invoiceController.deleteInvoice);

module.exports = router;