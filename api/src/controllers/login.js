const bcrypt = require('bcrypt')
const User = require('../db/models/user')
const { generateJWT } = require('../helpers/jwt')

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!passwordCorrect) {
      res.status(401).json({
        error: 'Invalid password or user'
      })
    }

    const userForToken = {
      id: user.id,
      email: user.email
    }

    //  Generar el JWT
    const token = await generateJWT(userForToken)

    res.send({
      ok: true,
      name: user.name,
      email: user.email,
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
  login
}
