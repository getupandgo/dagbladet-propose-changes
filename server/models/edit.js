const mongoose = require('mongoose')

const EditSchema = new mongoose.Schema({
  articleUrl: {
    type: String,
    required: true
  },
  originalText: {
    type: String,
    required: true
  },
  userText: {
    type: String,
    required: true
  },
  isApproved: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Edit', EditSchema)
