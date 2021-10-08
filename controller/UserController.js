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

async function session(req, res){
    console.log(req.body);
    let user = await User.findOne({
        where:{
            username: req.body.username,
            password: req.body.password
        }
    })
    if(user){
        req.session.userid = user.id;
        res.send("hola");
    }
    else{
        res.send("error");
    }
}

async function iniciarSesion(req, res) {
    res.render('iniciarsesion')
}

module.exports = {
    getAll,
    iniciarSesion,
    session
}