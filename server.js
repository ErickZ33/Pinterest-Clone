var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('./server/config/mongoose.js');

var route_setter = require('./server/config/routes.js');

// var request = require('request');
// var cheerio = require('cheerio');

// function parseImages(url) {
//     var list = [];
//     request(url, function (error, response, body) {
//         // var list = [];
//         var $ = cheerio.load(body);
//         $('img').each(function(){
//             var src = $(this).attr("src");
//             list.push(src);
//             // console.log(src)
//             // console.log("_____&&____")
//         });
//         // console.log(list);
//         // return list;
//     });
//     return list;
// }

// var imageReturn = parseImages('http://www.fromvalerieskitchen.com/blackberry-lemonade-margaritas/');
// console.log(imageReturn);

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public/dist')));

route_setter(app);

var server = app.listen(8000, function () {
    console.log("listening on port 8000");
});