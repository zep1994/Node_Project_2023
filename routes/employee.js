const path = require('path')

const express = require('express')
const app = express()

app.get('/add-employee', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", 'views', 'add-employee.html'))
})


app.post('/add-employee', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = app