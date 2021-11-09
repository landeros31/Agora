const { Schema, model } = require('mongoose')

const foroSchema = new Schema ({

    id_publisher:{
        type: String,
        require: true
    },
    
    id_disscusion:{
       type: String,
       require: true
    },


    text:{
        type: String,
        require: true
    },

    date_publisher:{
        timestamps:true
    },

  Comment:{
        
    question: {
            type: boolean,
            unique: true
    },
    
    contributions:{
            type: String,
            unique: true
    },
    
    challenges:{
            type: String,
            unique:true
    },

    },

    featured:{
        type: String,
        unique: true
    },

    Puntuation_system:{
        type: Number,
        default: 0
    },

    Editor_WYSIWYG:{
        type: Object
    },

})


foroSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  const Foro = model('Foro', foroSchema)
  
  module.exports = Foro