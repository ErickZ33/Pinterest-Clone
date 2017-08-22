var mongoose = require('mongoose');
var User = mongoose.model('User');
var Pin = mongoose.model('Pin');
var request = require('request');
var cheerio = require('cheerio');

module.exports = {
    parseImages: function(req,res){
        console.log("made it to parse");
        request(req.body.myUrl, function (error, response, body) {
            var $ = cheerio.load(body);
            var listTest = $('img').map(function(){
                return $(this).attr("src");
            }).get();
            res.json(listTest);
        });
    }

}