const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const employees = [];

// /admin/add-employee => GET
router.get('/add-employee', (req, res, next) => {
  res.render('employee/add-employee', {
    pageTitle: 'Add Employee',
    path: '/admin/add-employee',
    formsCSS: true,
    employeeCSS: true,
    activeAddEmployee: true
  });
});

// /admin/add-employee => POST
router.post('/add-employee', (req, res, next) => {
  employees.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.employees = employees;
