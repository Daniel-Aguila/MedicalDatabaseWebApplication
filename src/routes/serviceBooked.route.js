const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/serviceBooked.controller');

// get all employees
router.get('/', employeeController.getServiceBookedList);

// get employee by ID
router.get('/:id',employeeController.getServiceBookedByappointmentID);

router.get('/:id',employeeController.getServiceBookedByserviceID);

router.get('/:id',employeeController.getServiceBookeddurationID);

router.get('/:id',employeeController.getServiceBookedpriceID);

// create new employee
router.post('/', employeeController.createNewServiceBooked);

// update employee
router.put('/:id', employeeController.updateServiceBooked );

// delete employee
router.delete('/:id',employeeController.eleteServiceBooked);

module.exports = router;