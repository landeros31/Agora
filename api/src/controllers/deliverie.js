const Deliverie = require('../db/models/deliverie')


const controllerDeleverie = {
    create: async (req, res) => {
        try{
            const { id_brief,
                    id_user,
                    id_publisher,
                    text} = req.body

            if( !text || !id_brief || !id_publisher || !id_user )
                return res.status(400).json({msg: "Please fill in all fields."})
            
                const deliverie = new Deliverie({
                  
                        id_brief,
                        id_user,
                        id_publisher,
                        text,

                  })
                
                  const savedDeliverie = await deliverie.save()
                
                 res.json({msg: "Register success! outcome created "})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    // getDeleverie: async (req, res) => {
    //     try {
    //         const deliverie = await Deleverie.find({})
            
    //         res.json(deliverie)
    //     } catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // },
    updateDeliverie: async (req, res) => {
        try {
            const {id_deleverie, state} = req.body
            await Deleverie.findOneAndUpdate({_id : id_deliverie}, {
                state
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

// getAll X Brief
//getAll X student

 
 }
    

module.exports = controllerDeleverie