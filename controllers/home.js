
exports.getHome = (req, res, next) => {
    res.render('home', {
      pageTitle: 'Home',
      path: '/',
      employeeCSS: true
    });
  }