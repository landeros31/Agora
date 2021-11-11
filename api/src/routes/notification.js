const router = require('express').Router()
const controllerNotification = require('../controllers/notification')



router.post('/new-notification', controllerNotification.create)
router.patch('/state-notification', controllerNotification.updateState)
router.get('/get-notification', controllerNotification.getNotification)

module.exports = router
