const express = require("express");
const app = express.Router();
const user = require("../db/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let secret = "vaibhav";

app.post("/signup", async (req, res) => {
  const person = await user.find({ username: req.body.username1 });
  if (person.length === 0) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password1, salt);

    const register = await user.create({
      username: req.body.username1,
      password: hash,
      email: req.body.email,
      login: req.body.login,
    });
    res.json({ register });
  } else {
    res.status(400).json({ error: "User Is Already Registered" });
  }
});

app.post("/login", async (req, res) => {
  const person = await user.find({ username: req.body.username });
  if (person.length == 0) {
    res.status(400).json({ error: "User Is Not Registered" });
  } else {
    const normal = await bcrypt.compare(req.body.password, person[0].password);

    if (normal) {
      const set = await user.updateOne(
        { username: req.body.username },
        { $set: { login: req.body.login } }
      );

      const sign = jwt.sign(req.body.username, secret);
      res.json({ sign });
    } else {
      res.status(400).json({ error: "Password Is Incorrect" });
    }
  }
});

app.put("/login1", async (req, res) => {
  const person = await user.updateOne(
    { username: req.body.username },
    { $set: { login: false } }
  );
  res.send(person);
});

module.exports = app;
