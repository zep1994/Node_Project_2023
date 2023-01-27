const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const homeData = require('./home');

const router = express.Router();

router.get('/', (req, res, next) => {
  const employees = homeData.employees;
  res.render('home', {
    employees: employees,
    pageTitle: 'employees',
    path: '/',
    activeShop: true,
    employeeCSS: true
  });
});

module.exports = router;
