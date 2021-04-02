const express = require('express');
const router = express.Router();

const prescriptionController = require('../controllers/prescription.controller');

// get all prescriptions
router.get('/', prescriptionController.getPrescriptionList);

// get prescription by ID
router.get('/:id',prescriptionController.getPrescriptionByID);

// create new prescription
router.post('/', prescriptionController.createNewPrescription);

// update prescription
router.put('/:id', prescriptionController.updatePrescription);

// delete prescription
router.delete('/:id',prescriptionController.deletePrescription);

module.exports = router;