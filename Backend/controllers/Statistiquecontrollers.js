const Organisme = require('../models/Organismemodels')
const User = require('../models/Usermodels')
const Formation = require('../models/Formationmodels')

const Statistique = async (req, res) => {

    const organisme = await Organisme.find().count()    
    const formation = await Formation.find().count()
    const user = await User.find({ role: 'employe' }).count()

    res.json({organisme , formation ,user})

}

module.exports =  {Statistique}