const express = require("express");
const router = express.Router()

// get list of ninjas from database 
router.get('/ninjas', function(req, res) {
  res.send({ type: 'GET' })
})

// add a ninja to database 
router.post('/ninjas', function(req, res) {
  console.log(req.body)
  res.send({ type: 'POST', body: req.body })
})

// update a ninja to database
router.put('/ninjas/:id', function(req, res) {
  res.send({ type: 'PUT', id: req.params.id })
})

// delete a ninja from database 
router.delete('/ninjas/:id', function(req, res) {
  res.send({ type: 'DELETE' })
})

module.exports = router