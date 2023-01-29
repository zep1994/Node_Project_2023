const Employee = require('../models/employee')

// exports.getAddEmployees = (req, res, next) => {
//     res.render('/employee/add-employee', {
//       pageTitle: 'Add Employee',
//       path: '/admin/add-employee',
//       formsCSS: true,
//       employeeCSS: true,
//       activeAddEmployee: true
//     });
// }

// exports.postAddEmployees =  (req, res, next) => {
//     //Create new Employee with Model
//     const employee = new Employee(req.body.title)
//     employee.save()
//     res.redirect('/');
// }

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

// exports.getEmployee = (req, res, next) => {
//   const empId = req.params.empId
// }