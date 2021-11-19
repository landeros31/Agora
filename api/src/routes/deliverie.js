const router = require('express').Router()
const controllerDeliverie = require('../controllers/deliverie')



router.post('/new-deliverie', controllerDeliverie.create)
router.get('/get-deliverie', controllerDeliverie.getDeliverie)
router.get('/get-deliverie-student', controllerDeliverie.getDeliverieStudent)
router.get('/get-deliverie-proyect', controllerDeliverie.getDeliverieProyect)


//router.patch('/update-deliverie', controllerDeliverie.updateDeliverie)



module.exports = router