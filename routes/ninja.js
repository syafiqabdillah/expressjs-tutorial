const express = require("express");
const router = express.Router();

const Ninja = require("../models/ninja");

// get list of ninjas from database
router.get("/", function (req, res) {
  res.send({ type: "GET" });
});

// add a ninja to database
router.post("/", function (req, res) {
  Ninja.create(req.body).then((ninja) => {
    res.send({ type: "POST", body: ninja });
  });
});

// update a ninja to database
router.put("/:id", function (req, res) {
  res.send({ type: "PUT", id: req.params.id });
});

// delete a ninja from database
router.delete("/:id", function (req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
