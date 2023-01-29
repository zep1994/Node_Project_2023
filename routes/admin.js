const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

// /admin/add-employee => GET
router.get('/add-employee', adminController.getAddEmployees);

// /admin/add-employee => POST
router.post('/add-employee', adminController.postAddEmployees);



module.exports = router;
