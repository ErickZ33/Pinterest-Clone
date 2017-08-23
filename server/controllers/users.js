var mongoose = require('mongoose');
var User = mongoose.model('User');
var Board = mongoose.model('Board');
var currentUser

module.exports = {
    createUser: function (req, res) {
        var user = new User({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            followers: [],
            following: [],
            email: req.body.email,            
            interests: [],
            password: req.body.password, 
        });
        var myBoard = new Board();
        myBoard.name = "My Likes";
        myBoard._owner = user;
        user.boards.push(myBoard);
        myBoard.save(function (err){
            user.save(function (err, user) {
                if (err) {
                    res.json(err);
                } else {
                    currentUser = user.email
                    console.log(currentUser)
                    res.json(user);
                }
            });
        });
    },
    addUserInterest: function (req, res) {
        User.findOne({email: currentUser}, function(err, user){
            console.log('addUserInterest function-------------')
            console.log(user)
            if(err){
                console.log(err)
            }
            else{
                for(var k=0;k<req.body.interest.length;k++){
                    user.interests.push(req.body.interest[k])
                }
                console.log(user)
                res.json(user);
            }
        })
    }, 
    checkEmail: function (req, res) {
        User.find({email: req.body.email}, function(err, user){
            if(err){
                console.log(err)
            }
            else{
                res.json(user);                
            }
        })
    },
    login: function (req, res) {
        User.find({email: req.body.email}, function(err, user){
            if(err){
                console.log(err)
            }
            else{
                currentUser = req.body.email
                res.json(user);
            }
        })
    }, 
    getCurrentUser: function(req, res) {
        User.findOne({email: currentUser}, function(err, user){
            if(err){
                console.log(err)
            }
            else{
                console.log(user,"controller")
                res.json(user);
            }
        })
    },
    getBoards: function(req,res){
        User.findOne({email: currentUser}, function(err, user){
            console.log("boards BE: ", user);
            if (err) {
                console.log(err);
            } else {
                Board.find({_owner: user._id}, function(err, boards){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("inside boards backend function: ", boards);
                        res.json(boards);
                    }
                });
            }
        })
        
    }
}    