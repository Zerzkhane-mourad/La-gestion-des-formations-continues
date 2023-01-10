const mongoose = require('mongoose');


const OrganismeShema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },    
    
})

module.exports = mongoose.model('Organisme', OrganismeShema);
