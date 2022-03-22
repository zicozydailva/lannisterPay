const {fieldAuth, serviceChecker} = require('../config/auth');
const { fees, compute } = require('../controllers/serviceController');

const router = require('express').Router()

router.post("/fees", fieldAuth, fees)
router.post("/compute-transaction-fee/:id", serviceChecker, compute)

module.exports = router;