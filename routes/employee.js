const path = require('path')

const express = require('express')
const rootDir = require('../util/path')

const app = express()

app.get('/employee', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", 'views', 'employee/employee.html'))
})


module.exports = app