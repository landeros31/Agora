/* const { Schema, model } = require('mongoose')

const adminSchema = new Schema({
    id_teacher: {
    type: String,
    require: true,
    lowercase: true,
    
},
  Description: {
    type: String,
    require: true,
    lowercase: true,
  },
  Competencias: {
    type: String,
    trim: true,
    require: true,
    unique: true,
    lowercase: true,
  },
  Competencias: {
    type: String,
    trim: true,
    require: true,
    unique: true,
    lowercase: true,
  },

  rol: {
      admin:{
        type: Boolean,
        default: True,
      },
      teacher:{
        type: Boolean,
        default: false,
      },
      xy:{
        type: Boolean,
        default: false,
      },
  },
  passwordHash: {
    type: String,
    require: true,
    min :8,
  },
})

adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Admin = model('Admin', userSchema)

module.exports = Admin */