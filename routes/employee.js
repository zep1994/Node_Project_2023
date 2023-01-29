const path = require('path');

const express = require('express');

const employeesController = require('../controllers/employee')

const router = express.Router();


//GET /employees
router.get('/employees', employeesController.getEmployees );


module.exports = router;
