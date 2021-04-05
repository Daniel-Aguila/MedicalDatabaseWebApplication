const express = require('express');
const router = express.Router();

const staffController = require('../controllers/staff.controller');

router.param('staffID', function(request, response, next, id){
    console.log(
      'id param was is detected: ',
      id
    )
});

// render staff front page
router.get('/', (reg,res)=>{
    res.render('./actions/staffActions');
});

// render create new staff page
router.get('/new', (req,res)=>{
    res.render('./new/staffNew');
});

// render update staff page
router.get('/update', (req,res)=>{
    res.render('./update/staffUpdate');
});

//render view staff by ID page
router.get('/view', (req,res)=>{
    res.render('./view/staffViewID');
});

// render view all staff page
router.get('/viewAll', (req,res)=>{
    res.render('/viewAll/staffViewAll');
});

// render delete staff page
router.get('/delete', (req,res)=>{
    res.render('./delete/staffDelete');
});

console.log(this.search);
// create new staff
router.post('/new', staffController.createNewStaff);

// view all staffs
router.get('/viewAll', (staffController.getStaffList));

// view staff by ID
router.get('/view/:id',staffController.getStaffByID);

// update staff
router.post('/update/:id', staffController.updateStaff);

// delete staff
router.post('/delete/:id',staffController.deleteStaff);

module.exports = router;