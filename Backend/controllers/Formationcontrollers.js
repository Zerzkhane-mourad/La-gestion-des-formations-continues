const Formation = require('../models/Formationmodels')
const formidable = require('formidable')
const fs = require('fs')
const lodash = require('lodash')

const CreateFormation = (req, res) => {

    let form = new formidable.IncomingForm();


    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: "Image not uploaded"
            })
        }

        let formation = new Formation(fields);

        if (files.photo) {

            if (files.photo.size > Math.pow(10, 6)) {
                return res.status(400).send({
                    error: 'image should less than 1 mb'
                })
            }
            formation.photo.data = fs.readFileSync(files.photo.path)
            formation.photo.contentType = files.photo.type
        }

        formation.save((err, formation) => {
            if (err) {
                return res.status(400).send(
                    err
                )
            }
            res.send({
                formation
            })

        })
    })

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

    let form = new formidable.IncomingForm();

    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: "Image not uploaded"
            })
        }

        let formation = req.formation
        formation = lodash.extend(formation, fields)

        if (files.photo) {

            if (files.photo.size > Math.pow(10, 6)) {
                return res.status(400).send({
                    error: 'image should less than 1 mb'
                })
            }
            formation.photo.data = fs.readFileSync(files.photo.path)
            formation.photo.contentType = files.photo.type
        }

        formation.save((err, formation) => {
            if (err) {
                return res.status(400).json({
                    err: "formation not Update"
                })
            }
            res.json({
                formation
            })

        })
    })

}

module.exports = { CreateFormation , FormationByid ,  ShowFormation  , RemoveFormation , UpdateFormation}