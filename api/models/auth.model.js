// auth.model.js
const mongoose = require('mongoose')
// Setup schema
const authSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  accessKey: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})
// Export Auth model
const Auth = (module.exports = mongoose.model('auth', userSchema))

module.exports.get = function (callback, limit) {
  Auth.find(callback).limit(limit)
}
