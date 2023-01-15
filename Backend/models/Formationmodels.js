const mongoose = require('mongoose');

const FormationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    images:{
        type: String       
    },
    employe_assigned: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
    start_date:{
        type: String,
        required: true
    },
    end_date:{
        type: String,
        required: true
    },
  
    
})

module.exports = mongoose.model('Formation', FormationSchema)