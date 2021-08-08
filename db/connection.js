/*var mysql      = require('mysql');
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

"use strict";

const sequelize = require("sequelize");

const database = new sequelize.Sequelize('hospital', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true
});
module.exports = database;