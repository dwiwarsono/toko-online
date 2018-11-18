var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var config = require("./config/database");

// Initial App
var app = express();

// Connect to DB
mongoose.connect(config.database);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error;"));
db.once("open", function() {
  console.log("Sudah connect ke mongoDB");
});

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setup public folder
app.use(express.static(path.join(__dirname, "public")));

// Setup index
app.get("/", function(req, res){
  res.sendFile("This is a index show");
});

// Setup index with Echma Script 6 ES6
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })


// Setup server
var port = 3000;
app.listen(port, function() {
  console.log("Server running on port " + port);
});