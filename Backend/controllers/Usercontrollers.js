const User = require('../models/Usermodels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { transporter } = require('../helpers/config')
const Organisme = require('../models/Organismemodels')

const CreateUser = async (req, res) => {
    const { body } = req
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const chekemail = await User.findOne({ email: req.body.email })

    if (chekemail) {
        return res.status(400).json({
            error: 'Email Not Found '
        })
    } else {
        const user = await User.create({
            ...body,
            role: 'employe',
            password: hashPassword
        })
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: 3600 });
        const { email } = user;
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

const verify = (req, res) => {
    
    const user = jwt.verify(req.params.token, process.env.TOKEN_SECRET)
    User.findByIdAndUpdate(user._id, {confirmed: true })
        .then(() => { res.redirect('http://localhost:3000/signin')})
        .catch(() => { res.send('not update') })

}

const Login = async (req, res) => {

    const user = await User.findOne({ email: req.body.email })
    if (!user)
        return res.status(400).json({
            error: 'Email Not Found'
        })

    if (user.confirmed === false)
        return res.status(400).json({
            error: 'your email not confirme verify your emai'
        })

    const password = await bcrypt.compare(req.body.password, user.password)
    if (!password)
        return res.status(400).json({
            error: 'Password Not Found'
        })

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET)
    res.cookie('token', token)
    const { _id, username, email, role } = user;
    return res.status(200).send({ user: { _id, username, email, role } })


}

const Signout = (req, res) => {

    res.clearCookie('token');
    res.send('User signed out')

}

const UserById = (req, res, next, id) => {

    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(404).json({
                error: 'User not exescest'
            })

        }
        req.user = user
        next()

    })

}

const ShowUser = (req, res) => {

    let user = req.user;
    res.send({
        user
    })

}

const RemoveUser = (req, res) => {

    let user = req.user

    User.remove(user)
        .then(() => {
            res.status(204).send("User deleted")

        })
        .catch((err) => {
            res.status(404).send(
                err
            )

        })

}

const UpdateUser = (req, res) => {
   
    const user = req.user
    const {body} = req
    User.findByIdAndUpdate({_id: user._id}, {...body})
        .then(() => {
            res.status(200).send('Updatet succes')
        })
        .catch((err) => {
            res.status(400).send(err)
        })
}

const GetallUsers = (req, res) => {
    User.find({ role: 'employe' })
        .populate({ path: 'organisme', model: Organisme })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                err
            })
        })

}

module.exports = { CreateUser, Login, Signout, GetallUsers, UserById , ShowUser , UpdateUser , RemoveUser , verify}
