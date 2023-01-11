const express = require("express");
const user = require('../controllers/Usercontrollers');


const route = express.Router();

route.post('/createuser' ,user.CreateUser);
route.post('/signin',user.Login);
route.get('/signout',user.Signout);


module.exports = route