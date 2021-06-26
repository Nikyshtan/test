let port = 8080;

const express = require('express')
const app = express()
 
//Middleware 
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hola', function (req, res) {
    res.send('Hello World')
  })

app.listen(port, function () {
    console.log("Corriendo en el puerto");
})