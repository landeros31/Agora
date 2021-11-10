const { Schema, model } = require('mongoose')

const annuncieSchema = new Schema({

  id_user:{
      type:String,  
  },
   text:{
    type:String,
    require:true,
  },
 
  name_Project :{
    type : String,
    require : true
  }, 
    estado : {
        type : Boolean,
        default : true
    }

})

annuncieSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Annuncie = model('Annuncie', annuncieSchema)

module.exports = Annuncie