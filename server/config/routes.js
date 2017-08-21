var path = require('path');
var users = require('../controllers/users.js');


module.exports = function (app) {

    app.all('*', function (req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
    
}