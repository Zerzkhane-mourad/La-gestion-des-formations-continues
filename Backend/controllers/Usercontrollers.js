const User = require('../models/Usermodels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { transporter } = require('../helpers/config')

const CreateUser = async (req, res) => {
    const {body} = req
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const chekemail = await User.findOne({ email: req.body.email })

    if (chekemail){
    return res.status(400).json({
        error: 'Email Not Found '
    })
    }  else {
        const user = await User.create({
            ...body ,
            role: 'client',
            password: hashPassword
        })
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: 3600 });
        const {email} = user;
        transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Vérification votre compte Marhaba",
            html: `<p>cliquer sur ce <a href="http://localhost:8080/verify/${token}">lien</a> pour vérifier votre a compte</p>`
        })
        try {

        res.send('created succflly')
       
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

    if(user.confirmed===false)
    return res.status(400).json({
        error : 'your email not confirme verify your emai'
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
