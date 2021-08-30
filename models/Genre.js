/* MODELO DE LA ENTIDAD Genre*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class Genre extends Model {}

Genre.init({
    idgenre: {
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    name: DataTypes.STRING,
}, { sequelize, modelName: 'genre', tableName: 'genre', timestamps:false});


module.exports= Genre;