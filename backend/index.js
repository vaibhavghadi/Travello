const express = require("express");
require("./db/Connect");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
// app.use('/',require('./Routes/Auth'));
app.use("", require("./Routes/Travel"));
app.use("", require("./Routes/Auth"));
app.listen(4500);
