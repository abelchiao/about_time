const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");
// const Search = require("../../models/Search");
const User = require("../../models/User");
const passport = require("passport");

// getUserSearches in search_api_util
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

// createSearch in search_api_util
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
      // return res.json(newSearch);
        .then(user => res.json(newSearch))
        .catch(err => res.status(403).json(err));
    })    
  }
);

// deleteSearch in search_api_util
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id, (err, user) => {
      
      // TODO revert code if only search label is passed in (without search object id)
      // let searches = user.searches;
      // let targetSearch;
      // searches.forEach(search => {
      //   if (search.label === req.body.label) {
      //     targetSearch = search;
      //   }
      // });
      // if (targetSearch) {
      //   user.searches.pull(targetSearch._id)
      // }

      // no errors returned if target searchId does not exist
      user.searches.pull(req.body.searchId)

      user
        .save()
        .then(user => res.json(user))
        .catch(err => res.status(403).json(err))
    });
  }
);

module.exports = router;


