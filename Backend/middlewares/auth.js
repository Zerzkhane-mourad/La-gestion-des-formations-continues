const expressJWT = require('express-jwt');
const User = require('../models/Usermodels')
require('dotenv').config();

const requireSignIn = expressJWT({
    secret: process.env.TOKEN_SECRET,
    algorithms: ["HS256"],
    userProperty: 'auth'
})


const chekrole = (req, res) => {
    if (req.auth.role == "admin") {
        return res.send('acces admin')
    } else if (req.auth.role == "employe") {
        return res.send('acces employe')
    } 

}


module.exports = {requireSignIn , chekrole}