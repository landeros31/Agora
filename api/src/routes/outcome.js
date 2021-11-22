const router = require('express').Router()
const controllerOutcome = require('../controllers/outcome')



router.post('/new-outcome', controllerOutcome.create)
router.get('/get-outcome/:id_deliverie', controllerOutcome.getOutcome)
router.patch('/update-outcome/:id_deliverie',controllerOutcome.updateOutcome)



module.exports = router