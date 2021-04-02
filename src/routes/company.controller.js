const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/doctor.controller');

// get all employees
router.get('/', employeeController.getDoctorList);

// get employee by ID
router.get('/:id',employeeController.getDoctorByofficeID);


// create new employee
router.post('/', employeeController.createNewDoctor);

// update employee
router.put('/:id', employeeController.updateDoctor );

// delete employee
router.delete('/:id',employeeController.eleteDoctor);

module.exports = router;