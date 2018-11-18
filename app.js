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

// Set Router
var pages = require("./routes/pages.js");
var adminPages = require("./routes/admin_pages.js");

// Redirect
app.use("/", pages);
app.use("/admin/pages", adminPages);

// Setup server
var port = 3000;
app.listen(port, function() {
  console.log("Server running on port " + port);
});