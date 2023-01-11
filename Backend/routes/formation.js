const express = require("express");
const formation = require('../controllers/Formationcontrollers');


const route = express.Router();


route.post('/createformation', formation.CreateFormation)
route.get('/:formationId', formation.ShowFormation)
route.delete('/:formationId', formation.RemoveFormation )
route.put('/:formationId', formation.UpdateFormation )


route.param('formationId', formation.FormationByid)


module.exports = route