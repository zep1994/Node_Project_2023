const path = require('path')

const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')


app.set("view engine", 'ejs')
app.set('views', 'views')

const employeeRoutes = require('./routes/employee')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(employeeRoutes)

app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
