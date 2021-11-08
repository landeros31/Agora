const bcrypt = require('bcrypt')
const User = require('../db/models/user')
const { generateJWT } = require('../helpers/jwt')

const createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body

    // Verificar que el email no existe
    const existsEmail = await User.findOne({ email })
    if (existsEmail) {
      return res.status(400).json({
        ok: false,
        msg: 'El email ya existe'
      })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
      email,
      name,
      passwordHash
    })

    // Guardar user en DB
    await user.save()

    // Generar el JWT
    const token = await generateJWT(user.id)

    res.json({
      ok: true,
      user,
      token
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con administrador'
    })
  }
}

module.exports = {
  createUser
}
