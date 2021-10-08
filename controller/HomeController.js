const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const User = require('../models/User')


async function home(req, res){
    console.log(req.session.userid);
    let data;
    if(req.session.userid){
        let user = await User.findOne({
          where:{
              id : req.session.userid
          }  
        })
        console.log(user.username);
        let data=
            {
                title: "Juegos Random",
                username: user.username
            };
            res.render('index', data)

        
    }
    else{
        let data = 
        {
            title: "Juegos Random",
            username: "extraño"
        };
        res.render('index', data)

    }

    

    
}

module.exports = {
    home
}