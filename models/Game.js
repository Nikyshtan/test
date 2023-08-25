/* MODELO DE LA ENTIDAD GAME*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const saga = require('../models/Saga');
const genre = require('../models/Genre');


class Game extends Model {}

Game.init({
    idgames: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    durationHour: {
        type: DataTypes.INTEGER,
        field: "duration_hour"
    },
    idgenre: DataTypes.INTEGER,
    idsaga: DataTypes.INTEGER

}, { sequelize, modelName: 'game' });

Game.genre = Game.belongsTo(genre, {as: 'genre', foreignKey:'idgenre'});
Game.saga = Game.belongsTo(saga, {as: 'saga', foreignKey:'idsaga'});


module.exports= Game;

//Hola