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

app.use(employeeRoutes)


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
