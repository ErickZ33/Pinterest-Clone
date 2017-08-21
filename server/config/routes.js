var mongoose = require('mongoose');
var path = require('path');


module.exports = function (app) {

    app.all('*', function (req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
    
}