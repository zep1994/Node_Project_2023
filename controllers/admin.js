const Employee = require('../models/employee');

exports.getAddEmployees = (req, res, next) => {
  res.render('admin/employee/add-employee', {
    pageTitle: 'Add Employee',
    path: '/admin/add-employee',
    editing: false
  });
};

exports.postAddEmployees = (req, res, next) => {
  const title = req.body.title;
  //const imageUrl = req.body.imageUrl;
  //const description = req.body.description;
  const employee = new Employee({
    title: title,
    //description: description,
    // imageUrl: imageUrl
  });
  employee
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Employee');
      res.redirect('/employees');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditEmployee = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.employeeId;
  Employee.findById(prodId)
    // Employee.findById(prodId)
    .then(employee => {
      if (!employee) {
        return res.redirect('/');
      }
      res.render('admin/edit-employee', {
        pageTitle: 'Edit Employee',
        path: '/admin/edit-employee',
        editing: editMode,
        employee: employee
      });
    })
    .catch(err => console.log(err));
};

exports.postEditEmployee = (req, res, next) => {
  const prodId = req.body.employeeId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  const employee = new Employee(
    updatedTitle,
    updatedPrice,
    updatedDesc,
    updatedImageUrl,
    prodId
  );
  employee
    .save()
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/admin/employees');
    })
    .catch(err => console.log(err));
};

exports.getEmployees = (req, res, next) => {
  Employee.find()
    .then(employees => {
      res.render('admin/employee/employees', {
        employees: employees,
        pageTitle: 'Admin Employees',
        path: '/admin/employees'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteEmployee = (req, res, next) => {
  const prodId = req.body.employeeId;
  Employee.deleteById(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/admin/employees');
    })
    .catch(err => console.log(err));
};
