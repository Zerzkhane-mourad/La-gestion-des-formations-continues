const mongoose = require('mongoose');


const UserShema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        required: true ,
        default: 'employe'
    },
    password: { 
        type: String, 
        required: true 
    },    
    confirmed: {
        type: Boolean,
        default: false
    },
    organisme: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Organisme"
        }
      ],
})

module.exports = mongoose.model('User', UserShema);