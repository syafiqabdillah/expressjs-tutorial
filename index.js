const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()

app.use(express.urlencoded({ extended: true })); // parse urlencoded
app.use(express.json()); // parse application/json

const url = process.env.DB_CONNECTION;
const connParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connParams)
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

app.use("/posts", require("./routes/posts"));

app.listen(3030);
