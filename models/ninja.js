const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create ninja schema & model 
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  }
  // add in geolocation 
})

const Ninja = mongoose.model('ninja', NinjaSchema)

module.exports = Ninja