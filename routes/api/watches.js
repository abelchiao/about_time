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
    price: req.body.price
  });

  newWatch.save()
    .then(watch => res.json(watch));
  }
);

router.post("/search", (req, res) => {
  // let brand, model, price
  // let watches = Watch.find()
  // if (req.body.brand) {
  //   brand = req.body.brand
  //   watches = watches.find({ brand: brand })
  // }
  // if (req.body.model) {
  //   model = req.body.model
  //   watches = watches.find({ model: model })
  // }
  // if (req.body.price) {
  //   price = req.body.price
  //   watches = watches.find({ price: price })
  // }
  // watches => res.json(watches)
  //   .catch(err => res.status(404).json({ nowatchesfound: "No watches found" }));

  // let brand, model, price
  // if (req.body.brand) brand = req.body.brand;
  // if (req.body.model) model = req.body.model;
  // if (req.body.price) price = req.body.price;

  // Watch.find({
  //   brand: brand, model: model, price: price
  // })
  //   .then(watches => res.json(watches))
  //   .catch(err => res.status(404).json({ nowatchesfound: "No watches found" }));
  
  let query = {}
  if (req.body.brand) query.brand = req.body.brand;
  if (req.body.model) query.model = req.body.model;
  if (req.body.price) query.price = req.body.price;
  console.log(query)
  Watch.find( query )
    .then(watches => res.json(watches))
    .catch(err => res.status(404).json({ nowatchesfound: "No watches found" }));
});
module.exports = router;