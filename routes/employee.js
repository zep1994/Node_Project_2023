const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/employees', (req, res, next) => {
  const employees = adminData.employees;
  res.render('employee/employees', {
    employees: employees,
    pageTitle: 'employees',
    path: '/employees',
    hasEmployees: employees.length > 0,
    activeShop: true,
    employeeCSS: true
  });
});

module.exports = router;
