const fieldAuth = require('../config/auth');
const { fees, compute } = require('../controllers/serviceController');

const router = require('express').Router()

router.post("/fees", fieldAuth, fees)
router.post("/compute-transaction-fee/:id", fieldAuth, compute)

module.exports = router;