const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const Search = require("../../models/Search");
const User = require("../../models/User");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id, (err, user) => {
      if (err) {
        return res.json(err);
      } else {
        let searches = user.searches;
        return res.json(searches);
      }
    })
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id, (err, user) => {
      let newSearch = {
        label: req.body.label,
        query: req.body.query
      };
      user.searches.push(newSearch);
      user.save()
        .then(user => res.json(user))
        .catch(err => res.status(403).json(err));
    })    
  }
);

module.exports = router;
