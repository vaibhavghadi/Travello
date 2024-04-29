const express = require("express");
const app = express.Router();
const dest = require("../db/Destinations");
const count = require("../db/Countries");
const pass = require("../db/Passengers");
const card = require("../db/Cards");

app.get("/Packages", async (req, res) => {
  const tour = await dest.find();
  res.send(tour);
});

app.get("/", async (req, res) => {
  const tour1 = await count.find();
  res.send(tour1);
});

app.get("/country/:name", async (req, res) => {
  const country = await dest.find({ country: req.params.name });
  res.send(country);
});

app.get("/tour_description/:name", async (req, res) => {
  const country = await dest.find({ dest_name: req.params.name });
  res.send(country);
});

app.post("/tour_description/passenger_list/:name", async (req, res) => {
  const passenger = await pass.create(req.body);
  res.send(passenger);
});

app.post("/Payment", async (req, res) => {
  const card1 = await card.create(req.body);
  res.send(card1);
});
//app.post(
//   "/addNot es",
//   [
//     body("title", "enter proper title").isLength({ min: 3, max: 30 }),
//     body("description", "enter proper description").isLength({
//       min: 6,
//       max: 80,
//     }),
//     body("tag", "enter proper tag").isLength({ min: 3, max: 30 }),
//   ],
//   middle,
//   async (req, res) => {
//     const { title, description, tag } = req.body;
//     const error = validationResult(req);
//     if (!error.isEmpty()) {
//       return res.status(400).json({ error: error.array() });
//     } else {
//       const notes = await new model({
//         user: req.user[0]._id,
//         title,
//         description,
//         tag,
//       });
//       const data = notes.save();
//       res.json(notes);
//     }
//   }
// );

// app.put("/updateNotes/:id", middle, async (req, res) => {
//   const note = {};

//   const { title, description, tag } = req.body;

//   if (title) {
//     note.title = title;
//   }
//   if (description) {
//     note.description = description;
//   }
//   if (tag) {
//     note.tag = tag;
//   }

//   const data = await model.findById(req.params.id);

//   if (!data) {
//     return res.status(400).json({ error: "element is not here" });
//   }

//   if (data._id != req.params.id) {
//     return res.status(400).json({ error: "id is wrong" });
//   }

//   const value = await model.findByIdAndUpdate(
//     req.params.id,
//     { $set: note },
//     { new: true }
//   );
//   res.json(value);
// });

// app.delete("/deleteNotes/:id", middle, async (req, res) => {
//   const data = await model.findById(req.params.id);

//   if (!data) {
//     return res.status(400).json({ error: "element is not here" });
//   }

//   if (data._id != req.params.id) {
//     return res.status(400).json({ error: "id is wrong" });
//   }

//   const value = await model.findByIdAndDelete(req.params.id);
//   res.json({ success: "deleted successfully", value: value });
// });

module.exports = app;
