const { Schema, model } = require('mongoose')

const projectSchema = new Schema({

  project_name:{
      type:String,
      require:true,
  },
  img:{
    type:String,
    require:true,
  }, 
  id_teacher: {
    type: String,
    require: true,    
},
  description: {
    type: String,
    require: true,
  },
  outcome: {
      outcome1:{
          type: Boolean,
          default: false

      },
      outcome2:{
        type: Boolean,
        default: false

    },
    outcome3:{
        type: Boolean,
        default: false

    },
    outcome4:{
        type: Boolean,
        default: false

    }, outcome5:{
        type: Boolean,
        default: false

    }, outcome6:{
        type: Boolean,
        default: false

    },
    
  },
  resources: {
     resource1:{
        type:String,
     },
     resource2:{
        type:String,
     },
     resource3:{
        type:String,
     },
     resource4:{
        type:String,
     },
     resource5:{
        type:String,
     },
     resource6:{
        type:String,
     },
  },
  context:{
    type: String,
    require: true,
  },
  pedagogical_modalities : {
    type: String,
    require: true,
  },
  performance_criteria : {
    type: String,
    require: true,
  },
  evaluation_modality : {
    type: String,
    require: true,
  },
  deliver:{
    type: String,
    require: true,
  },
  date_max_deliver:{
    type: Date,
  },

  tags: {
      html5 :{
        type : Boolean,
        default: false
      },
      css3 :{
        type : Boolean,
        default: false
      },
       javascript:{
        type : Boolean,
        default: false
      },
      react :{
        type : Boolean,
        default: false
      },
      angular :{
        type : Boolean,
        default: false
      },
      boostrap :{
        type : Boolean,
        default: false
      },
      flex :{
        type : Boolean,
        default: false
      },
      git :{
        type : Boolean,
        default: false
      },
      mysql :{
        type : Boolean,
        default: false
      },
      mongodb :{
        type : Boolean,
        default: false
      },
      ux_ui :{
        type : Boolean,
        default: false
      },
  },
  cohorte:{
    num:{
      type : Number,
    },
    name:{
      type : String,
    }

  },
  
},{    
  timestamps:true
});

projectSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Project = model('Project', projectSchema)

module.exports = Project