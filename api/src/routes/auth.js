const { Router } = require('express')
const { check } = require('express-validator')
const { login } = require('../controllers/login')
const { createUser } = require('../controllers/register')
const { validateCamps } = require('../middlewares/validate-camps')

const router = Router()

router.post(
  '/api/users',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateCamps
  ],
  createUser
)

router.post(
  '/api/login',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateCamps
  ],
  login
)

module.exports = router
