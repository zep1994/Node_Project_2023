const path = require('path')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/add-employee', (req, res, next) => {
    res.sendFile(path.join(__dirname, "./", 'views', 'add-employee.html'))
})

app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
