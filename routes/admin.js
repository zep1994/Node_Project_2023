const path = require('path')

const express = require('express')
const rootDir = require('../util/path')

const app = express()

// /admin/add-product => GET
app.get('/add-employee', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '/employee/add-employee.html'));
  });
  
  // /admin/add-product => POST
  app.post('/add-employee', (req, res, next) => {
    //products.push({ title: req.body.title });
    console.log(req.body)
    res.redirect('/');
  });

module.exports = app