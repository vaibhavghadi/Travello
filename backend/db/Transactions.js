const mongo = require("mongoose");

const schema = mongo.Schema({
  Transactions_id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  Trip_same_id: {
    type: Number,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Payment_method: {
    type: String,
    required: true,
  },
  date_time: {
    type: Date.now(),
    required: true,
  },
});

module.exports = mongo.model("destinations", schema);
