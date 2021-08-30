"use strict";

const sequelize = require("sequelize");

const database = new sequelize.Sequelize('games', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true
});
module.exports = database;