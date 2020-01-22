const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Review = require("../../models/Review");
const User = require('../../models/User');
const passport = require("passport");
const Watch = require('../../models/Watch');

router.get("/", (req, res) => {
  
  // Review.find()
  //   .then(reviews => res.json(reviews))
  //   .catch(err => res.status(404).json({ noreviewsfound: "No reviews found" }));
});

router.post("/test", passport.authenticate("jwt", { session: false }), (req, res) => {
  let watchId = req.body.watchId
  

  // let searchHistoryItem = {
  //   user: req.user.id,
  //   query: req.body.searchParams
  // }
  
  // let searchParams = req.body.searchParams
  // let user = req.user.id

  // res.json(searchHistoryItem)

  // User.findById(req.user.id, function(err, user) {
  //   return res.json(user);
  // });

  // User.findByIdAndUpdate(req.user.id, { email1: searchHistoryItem })
  //   .then(searchHistoryItem => res.json("test1"))
  //   .catch(err => res.status(404).json({ nowatchesfound: "No watches found" }));
 
  // User.findByIdAndUpdate(req.user.id, {email: "test@test.com"}, function(err, user) {
  //   if (err) {
  //     return res.json(err);
  //   } else {
  //   return res.json(user);
  //   }
  // });

  // User.findByIdAndUpdate(req.user.id, {email: searchHistoryItem})
  //   .then(searchHistoryItem => res.json(searchHistoryItem))
  //   .catch(err => res.status(404).json({ nowatchesfound: "No watches found" }));
  // res.json({
  //   user: req.user.id,
  //   searchParams: req.body.searchParams
  // })
});

module.exports = router;