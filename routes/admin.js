const path = require('path');

const express = require('express');

const employeesController = require('../controllers/employee')

const router = express.Router();

// /admin/add-employee => GET
router.get('/add-employee', employeesController.getAddEmployees);

// /admin/add-employee => POST
router.post('/add-employee', employeesController.postAddEmployees);

module.exports = router;
