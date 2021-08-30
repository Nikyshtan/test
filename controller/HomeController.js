const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

async function home(req, res){

    let data = 
    {
        title: "Juegos Random",
    };

    res.render('index', data)
    
}




module.exports = {
    home
}