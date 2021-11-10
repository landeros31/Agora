const Project = require('../db/models/Project')


const controllerProject = {
    create: async (req, res) => {
        try{
            const {project_name,img,date,description,outcome,resources,context,pedagogical_modalities,performance_criteria,evaluation_modality,deliver,date_max_deliver,tags,} = req.body

            if(!name || !email || !password)
                return res.status(400).json({msg: "Please fill in all fields."})

            if(!validateEmail(email))
                return res.status(400).json({msg: "Invalid emails."})

            const user = await User.findOne({email})

            if(user) return res.status(400).json({msg: "This email already exists."})

            if(password.length < 6)
                return res.status(400).json({msg: "Password must be at least 6 characters."})

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = {
                name, email, passwordHash 
            }

            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/user/activate/${activation_token}`
            sendMail(email, url, "Verify your email address")


            res.json({msg: "Register Success! Please activate your email to start."})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}
    

module.exports = controllerProject