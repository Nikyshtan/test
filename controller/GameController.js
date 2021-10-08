const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Game = require('../models/Game');
const Genre = require('../models/Genre');
const Saga = require('../models/Saga');


async function getAll(req, res){
    console.log(req.session.id);
    console.log(req.session.userid);
    let data = await baseInformation();    

    res.render('games/games', data)
    
}

async function getAllJson(req, res){

    let games = await Game.findAll({ include: ['genre', 'saga']});

    res.json(games);
    
}

async function create(req, res) {
    let body = req.body;

    Game.create({
        idgenre: body.genre,
        idsaga: body.saga,
        name: body.title,
        durationHour: body.duration
    })
    let data = await baseInformation();
    data.flagNewGame = true;
    res.render('games/games', data)
}

async function createApi(req, res) {
    let body = req.body;
    console.log(req);
    console.log(body);

    let game = await Game.create({
        idgenre: body.genre,
        idsaga: body.saga,
        name: body.title,
        durationHour: body.duration
    })

    res.json(game);
}

async function getOne(req, res){
    let idGame = req.params.gameId;
    let game = await Game.findByPk( idGame,{include:['saga','genre']} );
    let data ={
        title: game.name,
        game: game
    }

    res.render('games/game', data)
    
}

async function baseInformation() {
    let games = await Game.findAll({ include: ['genre', 'saga']});
    let sagas = await Saga.findAll({attributes:['idsaga', 'name']});
    let genres = await Genre.findAll({ attributes:['idgenre', 'name'] });

    let data = 
    {
        games: games,
        sagas: sagas,
        genres: genres,
        flagNewGame : false,
        name: "Juegos"
    };
    return data;
}

module.exports = {
    getAll,
    create,
    getOne,
    getAllJson,
    createApi
}