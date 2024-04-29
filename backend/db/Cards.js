const mongo = require("mongoose");

const card = mongo.Schema({
  Card_Number: {
    type: Number,
    required: true,
  },
  Expiry_Date: {
    type: Date,
    required: true,
  },
  CVV: {
    type: Number,
    required: true,
  },
  Holder_Name: {
    type: String,
    required: true,
  },
  Balance: {
    type: Number,
    // required: true,
  },
});

module.exports = mongo.model("cards", card);
