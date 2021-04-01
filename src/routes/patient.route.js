const express = require('express');
const router = express.Router();

const patientController = require('../controllers/patient.controller');

// get all patients
router.get('/', patientController.getPatientList);

// get patient by ID
router.get('/:id',patientController.getPatientByID);

// create new patient
router.post('/', patientController.createNewPatient);

// update patient
router.put('/:id', patientController.updatePatient);

// delete patient
router.delete('/:id',patientController.deletePatient);

module.exports = router;