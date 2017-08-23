var mongoose = require('mongoose');
var User = mongoose.model('User');
var Pin = mongoose.model('Pin');
var Board = mongoose.model('Board');
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
            if (listTest.length>12) {
                var results = listTest.slice(0,12);
                res.json(results);
            } else {
                res.json(listTest);
            }
        });
    },

    create: function(req,res){
        Board.findOne({_id: req.body.board}, function(err, board){
            console.log(board);
            var pin = new Pin();
            pin.creator = req.body.creator[0];
            pin.description = req.body.description;
            pin.url = req.body.url;
            pin.image = req.body.img;
            pin.comments = [];
            pin.title = req.body.title;
            board._pins.push(pin);
            board.save(function(err, board){
                if (err){
                    console.log(err);
                } else {
                    pin.save(function(err, pin){
                        if (err){
                            console.log(err);
                        } else {
                            console.log("inside pinny create: ", pin)
                            res.json(pin);
                        }
                    });
                }
            });
        });
    },

    grab: function(req,res){
        Pin.find({}, function(err, pins){
            if (err){
                console.log(err);
            } else {
                res.json(pins);
            }
        })
    }

}