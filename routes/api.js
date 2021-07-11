const express = require("express");
const router = express.Router()

router.use('/ninja', require('./ninja'))

module.exports = router