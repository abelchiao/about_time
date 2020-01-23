// create
// /api/searchs, 'data'
// getUserSearch
// /api/users/search *ideal
// /api/searches/users/:id

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Search = require("../../models/Search");
const User = require("../../models/User");
const passport = require("passport");
// const Watch = require("../../models/Watch");

router.get("/", (req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noreviewsfound: "No reviews found" }));
});

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // return res.json(req.body.watchId)
    Watch.findById(req.body.watchId).then(watch => {
      let reviews = watch.reviews;
      // let err = reviews[1].user
      reviews.forEach(review => {
        // err = review
        if (review.user === req.user.id) {
          // err = review.user
          // errors.handle = "You have already reviewed this watch";
          return res.status(403).json("You have already reviewed this watch");
        }
      });
      // return res.json(watch)
      // need to coordinate what req.body will look like w/ FE
      watch.reviews.push(req.body.review);
      watch.save().then(watch => res.json(watch));
      //   .catch(err => res.status(403).json(err))
    });
  }
);

module.exports = router;


