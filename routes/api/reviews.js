const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const Review = require("../../models/Review");
const User = require('../../models/User');
const passport = require("passport");
const Watch = require('../../models/Watch');

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  Watch.findById(req.body.watchId, (err, watch) => {
    let reviews = watch.reviews;
    let error
    if (reviews.length !== 0) {
      reviews.forEach(review => {
        console.log(review)
        if ((review.length !== 0) && (review.userId.toString() === req.user.id)) {
          error = "You have already reviewed this watch"
          // return res.status(403).json("You have already reviewed this watch");
        }
      });
      if (error) return res.status(403).json(error);
    }
    // need to coordinate what req.body will look like w/ FE
    let newReview = ({
      userId: req.user.id,
      userHandle: req.user.handle,
      text: req.body.text
    })
    watch.reviews.push(newReview);
    watch.save()
      .then(watch => res.json(watch))
      .catch(err => res.status(403).json(err))
  });
});

router.patch("/edit", passport.authenticate("jwt", { session: false }), (req, res) => {
  Watch.findById(req.body.watchId, (err, watch) => {

    let review = watch.reviews.id(req.body.reviewId);

    // TODO via postman any user can edit any review
    // so frontend should limit edit button to appear only on review which belongs to logged in user

    review.set({
      text: req.body.text
    })
    watch.save()
      .then(watch => res.json(watch))
      .catch(err => res.status(403).json(err));
  })
});


router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    Watch.findById(req.body.watchId, (err, watch) => {

      // TODO match code from search delete route if review object id is not passed in
      
      // TODO pull will silently fail/noop if reviewId not found in watch.reviews

      // TODO via postman any user can delete any review
      // so frontend should limit delete button to appear only on review which belongs to logged in user

      watch.reviews.pull(req.body.reviewId);

      watch
        .save()
        .then(watch => res.json(watch))
        .catch(err => res.status(403).json(err));
    });
  }
);


module.exports = router;