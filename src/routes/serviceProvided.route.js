const express = require('express')
const router = express.Router();

const serviceProvidedController = require('../controllers/serviceProvided.controller');

// get all employees
router.get('/', serviceProvidedController.getServiceProvidedList);

// get employee by ID
router.get('/:id',serviceProvidedController.getServiceProvidedByID);

// create new employee
router.post('/', serviceProvidedController.createNewServiceProvided);

// update employee
router.put('/:id', serviceProvidedController.updateServiceProvided);

// delete employee
router.delete('/:id',serviceProvidedController.deleteServiceProvided);

module.exports = router;