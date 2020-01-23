const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Review = require("../../models/Review");
const User = require('../../models/User');
const passport = require("passport");
const Watch = require('../../models/Watch');

// router.get("/", (req, res) => {
//   Review.find()
//     .then(reviews => res.json(reviews))
//     .catch(err => res.status(404).json({ noreviewsfound: "No reviews found" }));
// });

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  // return res.json(req.body.watchId)
  Watch.findById(req.body.watchId).then(watch => {
    let reviews = watch.reviews;
    // let err = reviews[1].user
    reviews.forEach(review => {
      // err = review
      if (review.userId === req.user.id) {
        // err = review.user
        // errors.handle = "You have already reviewed this watch";
        return res.status(403).json("You have already reviewed this watch");
      }
    });
    // return res.json(watch)
    // need to coordinate what req.body will look like w/ FE
    let newReview = {
      userId: req.user.id,
      text: req.body.text
    }
    watch.reviews.push(newReview);
    watch.save()
      .then(watch => res.json(watch))
      .catch(err => res.status(403).json(err))
  });
});

router.post("/edit", passport.authenticate("jwt", { session: false }), (req, res) => {
  Watch.findById(req.body.watchId).then(watch => {
    let reviews = watch.reviews;
    reviews.forEach(review => {
      if (review.userId === req.user.id) {
        let updatedReview = {
          userId: req.user.id,
          text: req.body.text
        }
        
      }
    });
    watch.save()
      .then(watch => res.json(watch))
      .catch(err => res.status(403).json(err));
  })
});

// router.post("/test", passport.authenticate("jwt", { session: false }), (req, res) => {
//   Watch.findById(req.body.watchId)
//     .then(watch => {
//       let reviews = watch.reviews
//       reviews.forEach(review => {
//         if (review.authorId === req.user.id) {
//           errors.handle = 'You have already reviewed this watch';
//           return res.status(403).json(errors)
//         }
//       });
//       // need to coordinate 
//       watch.reviews.push(req.body.review)
//     })

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
// });

module.exports = router;