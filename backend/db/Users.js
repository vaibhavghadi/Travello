const mongo = require("mongoose");

const pass = mongo.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  login: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongo.model("users", pass);
