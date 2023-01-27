const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const homeRoutes = require('./routes/home')
const adminRoutes = require('./routes/admin');
const employeeRoutes = require('./routes/employee');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes)
app.use('/admin', adminRoutes);
app.use(employeeRoutes);

app.use(errorController.get404);

app.listen(3000);
