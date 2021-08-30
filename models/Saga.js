/* MODELO DE LA ENTIDAD SAGA*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');


class Saga extends Model {}

Saga.init({
    idsaga: {
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    name: DataTypes.STRING,
}, { sequelize, modelName: 'saga', tableName: 'saga', timestamps: false });

module.exports= Saga;