const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');


class User extends Model {}

User.init({
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'user' });

module.exports= User;