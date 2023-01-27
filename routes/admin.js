const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const employeesController = require('../controllers/employee')

const router = express.Router();

// /admin/add-employee => GET
router.get('/add-employee', adminController.getAddEmployees);

// /admin/add-employee => POST
router.post('/add-employee', adminController.postAddEmployees);

//GET /admin/employees
router.get('/employees', adminController.getEmployees );

module.exports = router;
