const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "eyo post" });
});

router.post("/", (req, res) => {
  res.json(req.body);
});

router.put("/:postId", (req, res) => {
  const postId = req.params.postId
  res.json({ postId });
});

router.delete("/:postId", (req, res) => {
  const postId = req.params.postId;
  res.json({ postId });
});

module.exports = router;
