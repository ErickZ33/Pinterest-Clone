var mongoose = require('mongoose');
var Board = mongoose.model('Board');
var User = mongoose.model('User')

module.exports = {
    createBoard: function (req, res) {
        
        User.findOne({ _id: req.body._userid }, function (err, creator) {
            if (err) {
                console.log(err)
            }
            else {
                var board = new Board({
                    name: req.body.name,
                    _owner: creator._id,
                    _pins: [],
                });
            
                board.save(function (error) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        res.json({});
                    }
                })
            }
        })

    },

    show: function (req, res) {
        Board.find({_owner: req.body._id}, function (err, items) {
            if (err) {
                console.log(err)
            } else {
                res.json(items)
            }
        })
    },
    delete:function(req,res){
        Board.remove({_id:req.body.content},function(err,item){
        })
    },
    addToBoard:function(req,res){
        Board.findOne({_id: req.body.boardid}, function (err, board) {
            if (err) {
                console.log(err)
            }
            else {
                board._pins.push(req.body.postid);
                board.save(function (error) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        res.json({});
                    }
                })
            }
        })
    }
} 