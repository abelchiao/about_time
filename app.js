const mongoose = require("mongoose");

const express = require("express");
const app = express();

const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const watches = require("./routes/api/watches");

const passport = require("passport");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World0"));
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use('/api/watches', watches);

// path under which assets are available
app.use(express.static('public'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


