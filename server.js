const express = require("express");
const path = require("path");
// const cors = require("cors");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

// app.use(cors());

app.get("/*", function(req, res, next) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );
  // next();
});

app.listen(9000, function() {
  console.log("Listen on port 9000");
});
