"use strict";

require('dotenv').config();

var mongoose = require('mongoose');

var uri = process.env.uri;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
var connection = mongoose.connection;
connection.once('open', function () {
  console.log("The db is online!");
});