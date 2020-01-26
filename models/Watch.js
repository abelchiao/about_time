const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  userHandle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const WatchSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  reviews: [ reviewSchema ]
  // reviews: {
  //   type: Array
  // }
});

module.exports = Watch = mongoose.model("Watch", WatchSchema);
