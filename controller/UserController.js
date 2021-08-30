const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const User = require('../models/User')

async function getAll(req, res){


    let users = await User.findAll({attributes:[
        'id', 'name'
    ]});
    let data = 
    {
        users: users,
        name: "pagina de usuarios",
    };

    res.render('users', data)
    
}

module.exports = {
    getAll
}