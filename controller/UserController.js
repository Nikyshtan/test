const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const User = require('../models/User')

async function getAll(req, res){


    let users = await User.findAll({attributes:[
        'id', 'name'
    ]});

    console.log("All users:", JSON.stringify(users, null, 2));
   
    res.render('users',

    {
        users: JSON.stringify(users, null, 2),
        name: "pagina de usuarios",
    }
    )
}


module.exports = {
    getAll
}