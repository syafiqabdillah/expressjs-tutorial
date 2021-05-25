const express = require("express");

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

app.use('/api', require('./routes/api'))

app.listen(3030, function () {});
