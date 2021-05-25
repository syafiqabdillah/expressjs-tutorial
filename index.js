const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use("/api", require("./routes/api"));

app.listen(3030, function () {});
