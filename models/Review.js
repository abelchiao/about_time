const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  text: {
    type: String,
    required: true
  },
  // rating: {
  //   type: Number,
  //   min: 1,
  //   max: 5
  // }
});

module.exports = Review = mongoose.model("Review", ReviewSchema);
