var mongoose = require('mongoose');
var Board = mongoose.model('Board');

module.exports = {
     create:function(req,res){
        var board = new Board({
            name: req.body.name,
            _user: req.body.agency,
            // _pins: req.body.status1, add after creation?
        });
        board.save(function(error) {
            if (error) {
                console.log('ERROR');
            } else {
                console.log('NOTE SUCCESFULLY SAVED!!!!');
                res.json({});
            }
        })
    }
} 