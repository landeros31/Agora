const Project = require('../db/models/Project')


const controllerProject = {
    create: async (req, res) => {
        try{
            const {project_name,img,id_teacher,date,description,outcome,resources,context,pedagogical_modalities,performance_criteria,evaluation_modality,deliver,date_max_deliver,tags} = req.body

            if(!project_name || !img || !id_teacher || !description || !context || !pedagogical_modalities || !performance_criteria || !evaluation_modality || !deliver )
                return res.status(400).json({msg: "Please fill in all fields."})
            
                const project = new Project({
                    project_name,
                    img,
                    id_teacher,
                    description,
                    context,
                    pedagogical_modalities,
                    performance_criteria,
                    evaluation_modality,
                    deliver
                    
                  })
                
                  const savedProject = await project.save()
                
                 res.json({msg: "Register success! project created "})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
    

module.exports = controllerProject