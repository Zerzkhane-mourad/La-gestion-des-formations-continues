const Formation = require('../models/Formationmodels')
const User = require('../models/Usermodels')
const jwt = require('jsonwebtoken')


const CreateFormation = async(req, res) => {

  const { body } = req    
  const images = req.file.filename

  const formation = {
    ...body,
    images: images
  }

  const isformfield = Object.values(formation).every(value => {
    if (value) {
      return true;
    }
    else {
      return false;
    }
  })

  if (isformfield) {
    await Formation.create(formation)
      .then(() => {
        res.send('Formation is Added')
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }

}

const FormationByid = (req, res, next, id) => {

    Formation.findById(id).exec((err, formation) => {
        if (err || !formation) {
            return res.status(404).json({
                error: 'Formation not exescest'
            })

        }
        req.formation = formation
        next()

    })


}

const ShowFormation = (req,res) => {

    req.formation.photo = undefined;

    res.json({
        formation : req.formation
    })

}

const RemoveFormation = (req,res) => {

    let formation = req.formation
    
    formation.remove(formation)
    .then(()=>{
        res.status(204).send("Product deleted")

    })
    .catch((err)=>{
        res.status(404).send({
            err
        })

    })

}

const UpdateFormation = (req, res) => {
  const formation = req.formation
  const {body} = req
  const images = req.file.filename

  const editformation = {
    ...body,
    images: images
  }

  if (editformation) {
    Formation.findByIdAndUpdate({ _id: formation._id }, editformation)
      .then(() => {
        res.send('Formation is Updated')
      })
      .catch(err => {
        res.send(err)
      })
  }

}

const GetallFormation = (req, res) =>{
    Formation.find()
    .populate({path:'employe_assigned', model: User})
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        res.status(500).send({
            error
        })
    })

}

const FormationAsigned = async(req, res) =>{
 
  const token = req.cookies.token
  const token_user = await jwt.verify(token, process.env.TOKEN_SECRET)
  await Formation.find({employe_assigned: token_user._id}) 
    .then((data)=>{
      res.send(data)
  })
  .catch((error)=>{
      res.status(500).send({
          error
      })
  })



}





module.exports = { CreateFormation , FormationByid ,  ShowFormation  , RemoveFormation , UpdateFormation , GetallFormation , FormationAsigned}