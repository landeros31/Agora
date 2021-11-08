const { Schema, model } = require('mongoose')

const usersSchema = new Schema({
  names: {
    type: String,
    require: true,
    lowercase: true,
    
},
  surnames: {
    type: String,
    require: true,
    lowercase: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,
    lowercase: true,
  },
  phone:{
      type: Number,
      trim: true,
      require: true,

  },
  img:{
      type: String,
      trim: true,
  },
  rol: {
      candidate:{
        type: Boolean,
        default: True,
      },
      student:{
        type: Boolean,
        default: false,
      },
      developer:{
        type: Boolean,
        default: false,
      },
  },
  outcome:{
    outcome1:{
        Generalcomment:{
            type: String,
    
        },
        techcomment:{
            type: String,
    
        },
        aprove:{
            type: Boolean,
            default: True,
        }
      },
      outcome2:{
        Generalcomment:{
            type: String,
    
        },
        techcomment:{
            type: String,
    
        },
        aprove:{
            type: Boolean,
            default: True,
        }
      },
      outcome3:{
        Generalcomment:{
            type: String,
    
        },
        techcomment:{
            type: String,
    
        },
        aprove:{
            type: Boolean,
            default: True,
        }
      },
      outcome4:{
        Generalcomment:{
            type: String,
    
        },
        techcomment:{
            type: String,
    
        },
        aprove:{
            type: Boolean,
            default: True,
        }
      },
      outcome5:{
        Generalcomment:{
            type: String,
    
        },
        techcomment:{
            type: String,
    
        },
        aprove:{
            type: Boolean,
            default: True,
        }
      },
      outcome6:{
        Generalcomment:{
            type: String,
    
        },
        techcomment:{
            type: String,
    
        },
        aprove:{
            type: Boolean,
            default: True,
        }
      },
  },

  passwordHash: {
    type: String,
    require: true,
    min :8,
  },
})

usersSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Users = model('Users', usersSchema)

module.exports = Users