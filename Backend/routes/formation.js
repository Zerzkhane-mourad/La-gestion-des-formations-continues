const express = require("express");
const formation = require('../controllers/Formationcontrollers');


const route = express.Router();
const upimage = require('../middlewares/UploadImage')


route.post('/createformation', upimage.single('images') ,formation.CreateFormation)
route.get('/showformation/:formationId', formation.ShowFormation)
route.delete('/:formationId', formation.RemoveFormation )
route.put('/:formationId',upimage.single('images') , formation.UpdateFormation )
route.get('/formations', formation.GetallFormation)
route.get('/formationasigned', formation.FormationAsigned)

route.param('formationId', formation.FormationByid)


module.exports = route