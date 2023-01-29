const Employee = require('../models/employee')


exports.getEmployees = (req, res, next) => {
    Employee.find()
    .then(employees => {
      res.render('employee/employees', {
        employees: employees,
        pageTitle: 'employees',
        path: '/employees',
        activeShop: true,
        employeeCSS: true
      });
    })
    .catch(err => {
      console.log(err)
    })
}

exports.getEmployee = (req, res, next) => {
  const empId = req.params.employeeId
  Employee.findById(empId)
  .then(employee => {
    res.render('employee/employee-detail', {
      employee: employee,
      pageTitle: employee.title,
      path: '/employees'
    })
  })
  .catch(err => console.log(err))
}