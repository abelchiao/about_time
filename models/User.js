const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const searchSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  label: {
    type: String,
    required: true
  },
  query: {
    type: Object,
    required: true
  }
});

const UserSchema = new Schema({
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  searches: [ searchSchema ]
});

module.exports = User = mongoose.model("User", UserSchema);


