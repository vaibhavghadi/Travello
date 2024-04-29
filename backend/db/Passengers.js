const mongo = require("mongoose");
const { required } = require("nodemon/lib/config");

const pass = mongo.Schema({
  Trip_id: {
    type: Number,
  },
  Trip_same_id: {
    type: Number,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  Trip_date: {
    type: Date,
    // required: true,
  },
  payment: {
    type: Number,
    // required: true,
  },
  username: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  pay_done: {
    type: Boolean,
  },
});

module.exports = mongo.model("passengers", pass);
