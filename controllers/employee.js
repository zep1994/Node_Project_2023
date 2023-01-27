const employees = [];

exports.getAddEmployees = (req, res, next) => {
    res.render('employee/add-employee', {
      pageTitle: 'Add Employee',
      path: '/admin/add-employee',
      formsCSS: true,
      employeeCSS: true,
      activeAddEmployee: true
    });
}

exports.postAddEmployees =  (req, res, next) => {
    employees.push({ title: req.body.title });
    res.redirect('/');
}

exports.getEmployees = (req, res, next) => {
    res.render('employee/employees', {
      employees: employees,
      pageTitle: 'employees',
      path: '/employees',
      hasEmployees: employees.length > 0,
      activeShop: true,
      employeeCSS: true
    });
}