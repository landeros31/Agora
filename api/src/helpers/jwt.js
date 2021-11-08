const jwt = require('jsonwebtoken')

const generateJWT = (userForToken) => {
  return new Promise((resolve, reject) => {
    const payload = { userForToken }

    jwt.sign(
      payload,
      process.env.JWT_KEY,
      {
        expiresIn: '24h'
      },
      (err, token) => {
        if (err) {
          console.log(err)
          reject(new Error('No se pudo generar el JWT'))
        } else {
          resolve(token)
        }
      }
    )
  })
}

const comprobateJWR = (token = '') => {
  try {
    const { uid } = jwt.verify(token, process.env.JWT_KEY)
    return [true, uid]
  } catch (error) {
    return [false, null]
  }
}

module.exports = {
  generateJWT,
  comprobateJWR
}
