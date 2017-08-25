var mongoose = require('mongoose');
var User = mongoose.model('User');
var Pin = mongoose.model('Pin');
var Board = mongoose.model('Board');
var request = require('request');
var cheerio = require('cheerio');

module.exports = {

    parseImages: function(req,res){
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
            var pin = new Pin();
            pin.creator = req.body.creator;
            pin.description = req.body.description;
            pin.url = req.body.url;
            pin.image = req.body.img;
            pin.category = req.body.category;
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
                            User.findOne({_id: req.body.creator._id}, function(err, user){
                                user.pins.push(pin);
                                user.save(function(err){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        res.json(user);
                                    }
                                })
                            })
                        }
                    });
                }
            });
        });
    },

    one: function(req,res){
        Pin.findOne({_id: req.body.id}, function(err, pin){
            if (err){
                console.log(err);
            } else {
                User.findOne({_id: pin.creator}, function(err, user){
                    if(err){
                        console.log(err);
                    } else {
                        var pinfo = {
                            pin: pin,
                            user: user
                        }
                        res.json(pinfo);
                    }
                })
            }
        })
    },

    grab: function(req,res){
        Pin.find({}, function(err, pins){
            if (err){
                console.log(err);
            } else {
                res.json(pins);
            }
        })
    },

    retrieveUserPins: function(req, res) {
        User.findOne({_id: req.body._id}, function(err, user){
            if(err){
                console.log(err);
            }
            else{
                Pin.find({}, function(err, pins){
                    if(err){
                        console.log(err);
                    }
                    else{
                        let result = {
                            'pins':[]
                        }
                        for(var k=0;k<user.interests.length;k++){
                           for(var j=0;j<pins.length;j++){
                               if(user.interests[k] == pins[j].category){
                                   result.pins.push(pins[j]);
                               }
                           }
                        }
                        res.json(result);
                    }
                })
            }
        })
    }


}