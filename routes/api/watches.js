const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Watch = require('../../models/Watch');

// all watches
router.get('/', (req, res) => {
  Watch.find()
    .then(watches => res.json(watches))
    .catch(err => res.status(404).json({ nowatchesfound: "No watches found" }));
});

// single watch by id
router.get('/:id', (req, res) => {
  Watch.findById(req.params.id)
    .then(watch => res.json(watch))
    .catch(err => res.status(404).json({ nowatchfound: 'No watch found with that Id'}))
});

// create new watch
router.post('/', (req, res) => {
  const newWatch = new Watch({
    brand: req.body.brand,
    model: req.body.model,
    style: req.body.style,
    gender: req.body.gender,
    movement: req.body.movement,
    case: req.body.case,
    // waterResistance: req.body.waterResistance,
    price: req.body.price
  });

  newWatch.save()
    .then(watch => res.json(watch));
  }
);

router.post("/search", (req, res) => {
  let query = {}
  if (req.body.brand) query.brand = req.body.brand;
  // if (req.body.model) query.model = req.body.model;
  if (req.body.style) query.style = req.body.style;
  if (req.body.gender) query.gender = req.body.gender;
  if (req.body.movement) query.movement = req.body.movement;
  if (req.body.case) query.case = req.body.case;
  // if (req.body.waterResistance) query.waterResistance = req.body.waterResistance;
  // if (req.body.price) query.price = req.body.price;
  if (req.body.price === "100-300") {query.price = { $gte: 100, $lte: 300 }}
  else if (req.body.price === "300-500") {query.price = { $gte: 300, $lte: 500 }}
  else if (req.body.price === "500-1000") {query.price = { $gte: 500, $lte: 1000 }}
  else if (req.body.price === "1000+") {query.price = { $gte: 1000 }}

  // console.log(query)
  Watch.find( query )
    .then(watches => res.json(watches))
    .catch(err => res.status(404).json({ nowatchesfound: "No watches found" }));
});
module.exports = router;
