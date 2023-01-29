const path = require('path');

const express = require('express');

const employeesController = require('../controllers/employee')

const router = express.Router();


//GET /employees
router.get('/employees', employeesController.getEmployees);

//GET /employee
router.get('/employees/:employeeId', employeesController.getEmployee)

module.exports = router;
