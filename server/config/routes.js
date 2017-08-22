var path = require('path');
var users = require('../controllers/users.js');

module.exports = function (app) {

    app.post('/api/register', function (req, res) {
        users.createUser(req, res);
    })

    app.post('/api/checkEmail', function (req, res) {
        users.checkEmail(req, res);
    })
    
    app.post('/api/login', function (req, res) {
        users.login(req, res);
    })

    app.get('/api/getCurrentUser', function (req, res) {
        users.getCurrentUser(req, res);
    })

    app.all('*', function (req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
    
}