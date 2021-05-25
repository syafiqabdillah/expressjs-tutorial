const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/ninjago", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});
mongoose.Promise = global.Promise;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// routing
app.use("/api", require("./routes/api"));

// error handling middlewre
app.use(function (err, req, res, next) {
  res.status(422).send({
    error: true,
    message: err.message,
  });
});

app.listen(3030, function () {});
