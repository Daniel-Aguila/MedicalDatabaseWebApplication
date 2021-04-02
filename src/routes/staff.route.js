const express = require('express');
const router = express.Router();

const staffController = require('../controllers/staff.controller');

router.get('/', (reg,res)=>{
    res.render('./actions/staffActions');
});

// get all staffs
router.get('/', (staffController.getStaffList));

// create new Staff
router.get('/new', (req,res)=>{
    res.render('./new/newStaff');
})

router.post('/new', staffController.createNewStaff);

// get Staff by ID
router.get('/:id',staffController.getStaffByID);



// update staff
router.put('/:id', staffController.updateStaff);

// delete staff
router.delete('/:id',staffController.deleteStaff);

module.exports = router;