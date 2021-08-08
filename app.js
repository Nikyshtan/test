
const express = require('express')
const hbs = require('hbs')
const userController = require('../test/controller/UserController');

let port = 8080;
const app = express()
//Middleware 
app.use(express.static('public'))   //Contenido estatico


//Handlebars: Paginas dinamicas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});



app.get('/users', userController.getAll);
app.get('/hola', )
app.post('/')

app.get('/hola', function (req, res) {
    res.send('Hello World')
  })

app.listen(port, function () {
    console.log("Corriendo en el puerto");
})






//Conexion a la base de datos
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  insecureAuth : true,
  database : 'hospital'
});

connection.connect();

connection.query('SELECT * FROM doctor', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows);
});


connection.end();*/