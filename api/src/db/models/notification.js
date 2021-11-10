const { Schema, model } = require('mongoose')

const projectSchema = new Schema({

  id_user:{
      type:String,  
  },
  text: {
    type : String,
    require : true
  },
    estado : {
        type : Boolean,
        default : true
    }

})

projectSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Project = model('Project', projectSchema)

module.exports = Project