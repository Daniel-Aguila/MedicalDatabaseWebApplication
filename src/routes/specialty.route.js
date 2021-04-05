const express = require('express');
const router = express.Router();

const specialtyController = require('../controllers/specialty.controller');

// get all employees
router.get('/', specialtyController.getSpecialtyList);

// get employee by ID
router.get('/:id',specialtyController.getSpecialtyByID);

// create new employee
router.post('/', specialtyController.createNewSpecialty);

// update employee
router.put('/:id', specialtyController.updateSpecialty);

// delete employee
router.delete('/:id',specialtyController.deleteSpecialty);

module.exports = router;