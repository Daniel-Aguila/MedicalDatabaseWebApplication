const express = require('express')
const router = express.Router();

const appointmentsController = require('../controllers/appointments.controller');

// get all employees
router.get('/', appointmentsController.getAppointmentsList);

// get employee by ID
router.get('/:id',appointmentsController.getAppointmentsByID);

// create new employee
router.post('/', appointmentsController.createNewAppointments);

// update employee
router.put('/:id', appointmentsController.updateAppointments);

// delete employee
router.delete('/:id',appointmentsController.deleteAppointments);

module.exports = router;