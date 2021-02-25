var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/backend-intro", 
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("MONGO DB CONNECTED");
  })
  .catch((e) => {
    console.log(e);
  });



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-user', function(req, res) {
  res.send('Route Test')
});



module.exports = router;