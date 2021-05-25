const express = require("express");
const router = express.Router()

router.use('/ninjas', require('./ninjas'))

module.exports = router