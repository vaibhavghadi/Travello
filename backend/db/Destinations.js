const mongo = require("mongoose");

const dest = mongo.Schema({
  dest_id: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  dest_name: {
    type: String,
    required: true,
  },
  img1: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  day1: {
    type: String,
    required: true,
  },
  day2: {
    type: String,
    required: true,
  },
  day3: {
    type: String,
    required: true,
  },
  day4: {
    type: String,
    required: true,
  },
  day5: {
    type: String,
    required: true,
  },
  day6: {
    type: String,
    required: true,
  },
});

module.exports = mongo.model("destinations", dest);
