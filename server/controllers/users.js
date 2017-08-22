var mongoose = require('mongoose');
var User = mongoose.model('User');

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
            password: req.body.password
        });
        user.save(function (err, user) {
            if (err) {
                res.json(err);
            } else {
                console.log(user)
                res.json(user);
            }
        });
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
                res.json(user);
            }
        })
    }, 
}    