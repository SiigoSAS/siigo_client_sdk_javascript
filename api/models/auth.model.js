// user.model.js
var mongoose = require("mongoose");
// Setup schema
var userSchema = mongoose.Schema({
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
// Export User model
var User = (module.exports = mongoose.model("user", userSchema));
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
