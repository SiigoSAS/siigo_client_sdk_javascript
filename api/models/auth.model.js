// auth.model.js
var mongoose = require("mongoose");
// Setup schema
var authSchema = mongoose.Schema({
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
});
// Export Auth model
var Auth = (module.exports = mongoose.model("auth", userSchema));

module.exports.get = function (callback, limit) {
  Auth.find(callback).limit(limit);
};
