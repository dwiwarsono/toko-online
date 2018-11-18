var express = require("express");
var router = express.Router();

// Setup index
router.get("/", function(req, res){
  res.send("index admin area" );
});

// Setup index with Echma Script 6 ES6
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })


// export
module.exports = router;