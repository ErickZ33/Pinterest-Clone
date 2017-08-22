var path = require('path');
var users = require('../controllers/users.js');


module.exports = function (app) {

    app.post('/api/createUser', function (req, res) {
        users.createUser(req, res);
    })

    app.all('*', function (req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
    
}