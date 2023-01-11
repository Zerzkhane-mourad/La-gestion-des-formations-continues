const mongoose = require('mongoose');

const FormationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    photo:{
        data: Buffer,
        contentType: String,
        
       
    },
    employe_assigned: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      ],
    start_date:{
        type: Date,
        required: true
    },
    end_date:{
        type: Date,
        required: true
    },
  
    
})

module.exports = mongoose.model('Formation', FormationSchema)