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
    default: "Misc"
  },
  gender: {
    type: String,
    default: "Misc"
  },
  movement: {
    type: String,
    default: "Misc"
  },
  case: {
    type: String,
    default: "Misc"
  },
  description: {
    type: String,
    default: "Additional information soon!"
  },
  imageURL: {
    type: String,
    default: "www.google.com"
  },
  retailURL: {
    type: String,
    default: "www.google.com"
  },
  // waterResistance: {
  //   type: String,
  //   required: true
  // },
  price: {
    type: Number,
    default: 1
  },
  reviews: [reviewSchema]
  // reviews: {
  //   type: Array
  // }
});

module.exports = Watch = mongoose.model("Watch", WatchSchema);
