const Notification = require('../db/models/notification')


const controllerNotification = {
    /*updateState*/

    create: async (req, res) => {
        try{
            const {id_user, text, estado} = req.body

            if(!id_user || !text || !estado)
                return res.status(400).json({msg: "Please fill in all fields."})
            
                const notification = new Notification({
                    id_user,
                    text,
                    estado
                    
                })

                
                  const savedNotification = await notification.save()
                
                 res.json({msg: "Register success! project created "})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
    

module.exports = controllerNotification