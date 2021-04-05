const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/company.controller');

// get all employees
router.get('/', employeeController.getCompanyList);

// get employee by ID
router.get('/:id',employeeController.getCompanyByofficeID);


// create new employee
router.post('/', employeeController.createNewCompany);

// update employee
router.put('/:id', employeeController.updateCompany );

// delete employee
router.delete('/:id',employeeController.deleteCompany);

module.exports = router;