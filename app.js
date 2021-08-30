
const express = require('express')
const hbs = require('hbs')
const userController = require('../test/controller/UserController');
const homeController = require('../test/controller/HomeController');
const gameController = require('../test/controller/GameController');

let port = 8080;
const app = express()
//Middleware 
app.use(express.static('public'))   //Contenido estatico



//Handlebars: Paginas dinamicas
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.get('/', homeController.home);

app.get('/users', userController.getAll);

app.get('/games', gameController.getAll);
app.post('/games', express.urlencoded(), gameController.create);
app.get('/games/:gameId',gameController.getOne);

app.listen(port, function () {
    console.log("Corriendo en el puerto");
})
