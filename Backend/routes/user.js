const express = require("express");
const user = require('../controllers/Usercontrollers');
const { Statistique } =require('../controllers/Statistiquecontrollers');
const {UserSigninValidator } = require('../middlewares/UserValidator');
const auth = require('../middlewares/auth')


const route = express.Router();

route.post('/createuser' ,user.CreateUser);
route.post('/signin',UserSigninValidator ,user.Login);
route.get('/signout',user.Signout);
route.delete('/:userId', user.RemoveUser)
route.get('/showuser/:userId', user.ShowUser)
route.put('/:userId', user.UpdateUser)
route.get('/users',user.GetallUsers);
route.get('/statistique', Statistique)
route.get('/auth', auth.requireSignIn, auth.chekrole);


route.param('userId', user.UserById)


module.exports = route