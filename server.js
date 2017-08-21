var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public/dist')));
require('./server/config/mongoose.js');

var route_setter = require('./server/config/routes.js');
route_setter(app);

var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});