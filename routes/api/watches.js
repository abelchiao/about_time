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
    description: req.body.description,
    imageURL: req.body.imageURL,
    retailURL: req.body.retailURL,
    // waterResistance: req.body.waterResistance,
    price: req.body.price
  });

  newWatch.save()
    .then(watch => res.json(watch));
  }
);

router.post("/search", (req, res) => {
  let query = {$and: []};

  if (req.body.brand && req.body.brand.length !== 0) {
    let newOptions = { $or: [] };
    req.body.brand.forEach((element) => {
      newOptions["$or"].push({ brand: { $regex: element, $options: "i" } });
    });
    query["$and"].push(newOptions);
  };
  if (req.body.style && req.body.style.length !== 0) {
    let newOptions = { $or: [] };
    req.body.style.forEach((element) => {
      newOptions["$or"].push({ style: { $regex: element, $options: "i" } });
    });
    query["$and"].push(newOptions);
  };
  if (req.body.gender && req.body.gender.length !== 0) {
    let newOptions = { $or: [] };
    req.body.gender.forEach((element) => {
      newOptions["$or"].push({ gender: { $regex: element, $options: "i" } });
    });
    query["$and"].push(newOptions);
  };
  if (req.body.movement && req.body.movement.length !== 0) {
    let newOptions = { $or: [] };
    req.body.movement.forEach((element) => {
      newOptions["$or"].push({ movement: { $regex: element, $options: "i" } });
    });
    query["$and"].push(newOptions);
  };
  if (req.body.case && req.body.case.length !== 0) {
    let newOptions = { $or: [] };
    req.body.case.forEach((element) => {
      newOptions["$or"].push({ case: { $regex: element, $options: "i" } });
    });
    query["$and"].push(newOptions);
  };
  if (req.body.price && req.body.price.length !== 0) {
    let newOptions = { $or: [] };
    req.body.price.forEach((element) => {
      let priceQuery = ""
      if (element === "$100-300") {priceQuery = { $gte: 100, $lte: 300 }}
      else if (element === "$300-500") {priceQuery = { $gte: 300, $lte: 500 }}
      else if (element === "$500-1000") {priceQuery = { $gte: 500, $lte: 1000 }}
      else if (element === "$1000+") {priceQuery = { $gte: 1000 }}

      newOptions["$or"].push({ price: priceQuery });
    });
    query["$and"].push(newOptions);
  };

  // if (req.body.brand) query.brand = req.body.brand;
  // // if (req.body.model) query.model = req.body.model;
  // if (req.body.style) query.style = {'$regex': req.body.style, '$options': 'i'};
  // if (req.body.gender) query.gender = {'$regex': req.body.gender, '$options': 'i'};
  // if (req.body.movement) query.movement = {'$regex': req.body.movement, '$options': 'i'};
  // if (req.body.case) query.case = {'$regex': req.body.case, '$options': 'i'};
  // // if (req.body.waterResistance) query.waterResistance = req.body.waterResistance;
  // // if (req.body.price) query.price = req.body.price;
  // if (req.body.price === "$100-300") {query.price = { $gte: 100, $lte: 300 }}
  // else if (req.body.price === "$300-500") {query.price = { $gte: 300, $lte: 500 }}
  // else if (req.body.price === "$500-1000") {query.price = { $gte: 500, $lte: 1000 }}
  // else if (req.body.price === "$1000+") {query.price = { $gte: 1000 }}

  // console.log(query)
  // const util = require("util");
  // console.log(util.inspect(query, false, null, true /* enable colors */))

  Watch.find( query )
    .then(watches => res.json(watches))
    .catch(err => res.status(404).json({ nowatchesfound: "No watches found" }));
});
module.exports = router;



