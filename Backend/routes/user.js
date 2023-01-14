const express = require("express");
const user = require('../controllers/Usercontrollers');


const route = express.Router();

route.post('/createuser' ,user.CreateUser);
route.post('/signin',user.Login);
route.get('/signout',user.Signout);
route.delete('/:userId', user.RemoveUser)
route.get('/showuser/:userId', user.ShowUser)
route.put('/:userId', user.UpdateUser)
route.get('/users',user.GetallUsers);



route.param('userId', user.UserById)


module.exports = route