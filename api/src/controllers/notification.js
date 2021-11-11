const Notification = require('../db/models/notification')


const controllerNotification = {
    getNotification: async (req, res) => {
        try {
            const notifications = await Notification.find({})

            res.json(notifications)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    updateState: async (req, res) => {
        try {
            const {state,id_notification} = req.body
            await Notification.findOneAndUpdate({_id: id_notification}, {
                state
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    create: async (req, res) => {
        try{
            const {id_user, text, state} = req.body

            if(!id_user || !text || !state)
                return res.status(400).json({msg: "Please fill in all fields."})
            
                const notification = new Notification({
                    id_user,
                    text,
                    state
                    
                })

                
                  const savedNotification = await notification.save()
                
                 res.json({msg: "Register success! project created "})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
    

module.exports = controllerNotification