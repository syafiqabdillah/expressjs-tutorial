const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// get list of ninjas from database
router.get("/", function (req, res, next) {
  res.send({ type: "GET" });
});

// get a ninja from database
router.get("/:id", function (req, res, next) {
  Ninja.findOne({ _id: req.params.id }).then((ninja) => {
    res.send(ninja);
  });
});

// add a ninja to database
router.post("/", function (req, res, next) {
  Ninja.create(req.body)
    .then((ninja) => {
      res.send({ type: "POST", body: ninja });
    })
    .catch(next);
});

// update a ninja to database
router.put("/:id", function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body).then((ninja) => {
    Ninja.findOne({ _id: req.params.id }).then((ninja) => {
      res.send(ninja);
    });
  });
});

// delete a ninja from database
router.delete("/:id", function (req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
    res.send(ninja);
  });
});

module.exports = router;
