const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

// /admin/add-employee => GET
router.get('/add-employee', adminController.getAddEmployees);

// /admin/add-employee => POST
router.post('/add-employee', adminController.postAddEmployees);

// /admin/add-employee => GET
router.get('/edit-employee/:employeeId', adminController.getEditEmployee);

// /admin/add-employee => POST
router.post('/edit-employee', adminController.postEditEmployee);

//router.post('/delete-employee', adminController.postDeleteEmployee);


module.exports = router;
