const Outcome = require('../db/models/outcome')


const controllerOutcome = {
    create: async (req, res) => {
        try{
            const {id_deliverie, outcomes} = req.body

            if(!outcomes || !id_deliverie )
                return res.status(400).json({msg: "Please fill in all fields."})
            
                const outcome = new Outcome({
                    
                    outcomes,
                    id_deliverie,

                  })
                
                  const savedOutcome = await outcome.save()
                
                 res.json({msg: "Register success! outcome created "})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getOutcome: async (req, res) => {
        try {
            const outcome = await Outcome.find({})
            
            res.json(outcome)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateOutcome: async (req, res) => {
        try {
            const {id_outcome, outcomes} = req.body
            await Outcome.findOneAndUpdate({_id : id_outcome}, {
                outcomes
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
 
}
    

module.exports = controllerOutcome