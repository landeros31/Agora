const { validationResult } = require('express-validator')

const validateCamps = (req, res, next) => {
  const error = validationResult(req)
  if (!error.isEmpty()) {
    return res.status(400).json({
      ok: false,
      error: error.mapped()
    })
  }
  next()
}

module.exports = {
  validateCamps
}
