const express = require('express')
const router = express.Router();

const serviceController = require('../controllers/service.controller');

// get all employees
router.get('/', serviceController.getServiceList);

// get employee by ID
router.get('/:id',serviceController.getServiceByID);

// create new employee
router.post('/', serviceController.createNewService);

// update employee
router.put('/:id', serviceController.updateService);

// delete employee
router.delete('/:id',serviceController.deleteService);

module.exports = router;