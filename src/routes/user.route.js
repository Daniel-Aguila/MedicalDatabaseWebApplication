const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// get all employees
router.get('/', userController.getUserList);

// get employee by ID
router.get('/:id',userController.getUserByID);

// create new employee
router.post('/', userController.createNewUser);

// update employee
router.put('/:id', userController.updateUser);

// delete employee
router.delete('/:id',userController.deleteUser);

module.exports = router;