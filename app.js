const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const mongoConnect = require('./util/database');
const mongoose = require('mongoose')

const errorController = require('./controllers/error')
const User = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const homeRoutes = require('./routes/home')
const adminRoutes = require('./routes/admin');
const employeeRoutes = require('./routes/employee');
const authRoutes = require('./routes/auth')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('63d6b1883f210bbef8971628')
    .then(user => {
        req.user = user
        next()
    })
    .catch(err => console.log(err))
})

app.use(homeRoutes)
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes)
app.use(employeeRoutes);

app.use(errorController.get404);

// mongoConnect(client => {
//     //console.log(client);
//     app.listen(3000);
// });

mongoose
  .connect(
    'mongodb+srv://root:rebel1994isCool@cluster0.ws4vxdk.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne()
    .then(user => {
        if (!user) {
            const user = new User({
                name: 'Thomas',
                email: 'thomasmatlockbba@gmail.com'
            })
            user.save()

        }
    })

    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });