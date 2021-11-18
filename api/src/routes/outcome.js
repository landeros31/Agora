const router = require('express').Router()
const controllerOutcome = require('../controllers/outcome')



router.post('/new-outcome', controllerOutcome.create)
router.get('/get-outcome', controllerOutcome.getOutcome)
router.patch('/update-outcome',controllerOutcome.updateOutcome)



module.exports = router