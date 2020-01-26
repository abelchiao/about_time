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

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

mongoose.set('useFindAndModify', false);




// var promise = Watch.create({
//   brand: "testBrand",
//   model: "testModel",
//   style: "testStyle",
//   price: 123,
//   reviews: {
//     userId: "5e2d27c5b2da08467f469ca4",
//     text: "testText"
//   }
// });

// const fs = require("fs");
// const itemResult = await Watch.find({}).exec();
// if(itemResult.length !== 0) {

//   const itemsSeedDataRaw = fs.readFileSync(
//     `${__dirname}/data/watchesSeedRevArrMinAddLine2.json`,
//     "utf8"
//   );
// console.log(itemsSeedDataRaw)
//   const itemsSeedData = JSON.parse(itemsSeedDataRaw);
//   Watch.insertMany(itemsSeedData);

  // await Watch.insertMany(itemsSeedData);

// }


// fs.readFile("./data/watchesSeedRevArrMin.json", (err, data) => {
//   if (err) throw err;
//   let watches = JSON.parse(data);
//   console.log(watches);
// });


// let jsonData = require("./data/watchesSeedRevArrMin.json");
// console.log(jsonData);


// const fs = require("fs");
// const fileContents = fs.readFileSync(
//   "./data/watchesSeedRevArrMin.json",
//   "utf8"
// );
// console.log(fileContents)
// try {
//   const data = JSON.parse(fileContents);
// } catch (err) {
//   console.error(err);
// }


// const fs = require("fs");

// fs.readFile("/path/to/file.json", "utf8", (err, fileContents) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   try {
//     const data = JSON.parse(fileContents);
//   } catch (err) {
//     console.error(err);
//   }
// });




// const csvParser = require("csv-parser");
// // const fs = require("fs");

// const filepath = "./data/watchesSeedRevArrMinAddLine2.json";

// fs.createReadStream(filepath)
//   .on("error", err => {
//     // handle error
//     console.log(err);
//   })

//   // .pipe(csvParser())
//   JSON.parse()
//   .on("data", row => {
//     // use row data
//     console.log(row);

//     Watch.create(row);
//   })

//   .on("end", () => {
//     // handle end of CSV
//   });




const lineReader = require("line-reader");
let itemsSeedData;
lineReader.eachLine("./data/watchesSeedRevArrMinAddLine2.json", function(line) {
  console.log(line);
  itemsSeedData = JSON.parse(line);
  Watch.insertMany(itemsSeedData);
});




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


