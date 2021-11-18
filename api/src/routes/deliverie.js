const router = require('express').Router()
const controllerDeliverie = require('../controllers/deliverie')



router.post('/new-deliverie', controllerDeliverie.create)
//router.get('/get-deliverie', controllerDeliverie.getDeliverie)
router.patch('/update-deliverie', controllerDeliverie.updateDeliverie)



module.exports = router