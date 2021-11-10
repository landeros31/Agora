const router = require('express').Router()
const controllerProject = require('../controllers/projects')



router.post('/new-project', controllerProject.create)

module.exports = router
