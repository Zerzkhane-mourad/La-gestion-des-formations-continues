const User = require('../models/Usermodels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const CreateUser = async (req, res) => {
    const {body} = req
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const chekemail = await User.findOne({ email: req.body.email })

    if (chekemail){
    return res.status(400).json({
        error: 'Email Not Found '
    })
    } else {
        const user = await User.create({
            ...body,
            role: 'employe',
            password: hashPassword
        })
        try {
            res.send(user)

        } catch {
            res.send('error creating')
        }
    }
}

const Login = async (req, res) => {
     
    const user = await User.findOne({ email: req.body.email })
    if (!user)
    return res.status(400).json({
        error: 'Email Not Found'
    })

    const password = await bcrypt.compare(req.body.password, user.password)
    if (!password) 
    return res.status(400).json({
        error: 'Password Not Found'
    })

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET)
    res.cookie('token', token)
    const { _id, username, email, role } = user;
    return res.status(200).send({user: {_id, username, email, role}})


}

const Signout = (req, res) => {

    res.clearCookie('token');

    res.send('User signed out')

}

module.exports={ CreateUser , Login , Signout }
