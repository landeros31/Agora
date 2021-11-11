const router = require('express').Router()
const controllerNotification = require('../controllers/notification')



router.post('/new-notification', controllerNotification.create)
/*router.patch('/state-notification', controllerNotification.updateState)*/

module.exports = router
