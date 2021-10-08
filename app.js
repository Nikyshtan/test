
const express = require('express');
const session = require('express-session');
const hbs = require('hbs');

const bodyParser = require('body-parser');

const userController = require('../test/controller/UserController');
const homeController = require('../test/controller/HomeController');
const gameController = require('../test/controller/GameController');

let port = 8080;
const app = express()

//Middleware 
app.use(express.static('public'));   //Contenido estatico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use( session({
    secret: "1234nicole",
    resave: false,
    saveUninitialized: true
}));


//Handlebars: Paginas dinamicas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//rutas
app.get('/', homeController.home);

app.get('/users', userController.getAll);

//juegos
app.get('/games', gameController.getAll);
app.post('/games', express.urlencoded(), gameController.create);
app.get('/games/:gameId',gameController.getOne);


app.get('/iniciarsesion', userController.iniciarSesion);
app.post('/iniciarsesion', userController.session);

//API

app.get('/api/games', gameController.getAllJson);

app.post("/api/games", gameController.createApi);



app.listen(port, function () {
    console.log("Corriendo en el puerto");
})
