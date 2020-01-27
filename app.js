const mongoose = require("mongoose");

const express = require("express");
const app = express();

const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const watches = require("./routes/api/watches");
const reviews = require("./routes/api/reviews");
const searches = require("./routes/api/searches");

const passport = require("passport");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Watch = require("./models/Watch");
const User = require("./models/User");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);



// TODO uncomment and run first to populate users from seed file

// User.deleteMany({}, function(err) {
//   console.log("User collection removed");
// }).then( () => {

//   const lineReader1 = require("line-reader");
//   let itemsSeedData1;
//   lineReader1.eachLine("./data/usersSeed1.json", function(line) {
//     console.log(line);
//     itemsSeedData1 = JSON.parse(line);
//     User.insertMany(itemsSeedData1);
//   });
// });


// TODO after seeding user, grab user IDs and place within reviews object of Watches seed file,
// then disable above block, uncomment this block and run second to populate watches from seed file

// Watch.deleteMany({}, function(err) {
//   console.log("Watch collection removed");
// }).then( () => {

// const lineReader2 = require("line-reader");
// let itemsSeedData2;
// lineReader2.eachLine("./data/watchesSeedFull.json", function(line) {
//   console.log(line);
//   itemsSeedData2 = JSON.parse(line);
//   console.log(itemsSeedData2)
//   Watch.insertMany(itemsSeedData2);
// });
// });



// app.get("/", (req, res) => res.send("Hello World0"));
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use('/api/watches', watches);
app.use('/api/reviews', reviews);
app.use("/api/searches", searches);


// path under which assets are available
app.use(express.static('public'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));





