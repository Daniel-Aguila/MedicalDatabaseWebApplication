const express = require('express');
const router = express.Router();

const staffController = require('../controllers/staff.controller');

router.get('/', (reg,res)=>{
    res.render('./actions/staffActions');
});

// get all staffs
router.get('/', (staffController.getStaffList));

// get Staff by ID
router.get('/:id',staffController.getStaffByID);

// create new Staff
router.post('/', staffController.createNewStaff);

// update staff
router.put('/:id', staffController.updateStaff);

// delete staff
router.delete('/:id',staffController.deleteStaff);

module.exports = router;