const db = require("mongoose");

let url = "mongodb://localhost:27017/tourist";

module.exports = db.connect(url);
