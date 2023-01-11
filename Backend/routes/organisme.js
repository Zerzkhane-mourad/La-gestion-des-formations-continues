const express = require("express");
const organisme = require('../controllers/Organismecontrollers');


const route = express.Router();


route.post('/createorganisme', organisme.CreateOrganisme)
route.delete('/:organismeId', organisme.RemoveOrganisme)
route.put('/:organismeId', organisme.UpdateOrganisme)



route.param('organismeId', organisme.OrganismeById)

module.exports = route