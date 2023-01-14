const Organisme = require('../models/Organismemodels')

const CreateOrganisme = (req, res) => {

    const organisme = new Organisme(req.body)

    organisme.save(organisme)
    
    .then(()=>{
        res.status(200).send('created succes')
    })
    .catch((err)=>{
        res.status(400).send(err)
    })

}

const OrganismeById = (req, res, next, id) => {

        Organisme.findById(id).exec((err, organisme) => {
        if (err || !organisme) {
            return res.status(404).json({
                error: 'Organisme not exescest'
            })

        }

        req.organisme = organisme
        next()

    })


}

const ShowOrganisme = (req,res) => {

    let organisme = req.organisme;

    res.send({
        organisme
    })

}

const RemoveOrganisme = (req,res) => {

    let organisme = req.organisme

    organisme.remove(organisme)
    .then(()=>{
        res.status(204).send("Organisme deleted")

    })
    .catch((err)=>{
        res.status(404).send(
            err
        )

    })

}

const UpdateOrganisme = (req,res) => {

    const {body} = req


    Organisme.updateOne({...body})
    .then(()=>{
        res.status(200).send('Updatet succes')
    })
    .catch((err)=>{
        res.status(400).send(err)
    })

}

const GetallOrganisme = (req, res) =>{
    Organisme.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(500).send({
            err: "No Organisme is registered"
        })
    })

}


module.exports = { CreateOrganisme , OrganismeById , ShowOrganisme , RemoveOrganisme , UpdateOrganisme , GetallOrganisme }