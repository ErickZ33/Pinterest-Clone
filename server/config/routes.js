var path = require('path');
var users = require('../controllers/users.js');
var pins = require('../controllers/pins.js');
var boards = require('../controllers/boards.js');

module.exports = function (app) {

    app.post('/api/register', function (req, res) {
        users.createUser(req, res);
    })

    app.post('/api/addUserInterest', function (req, res) {
        users.addUserInterest(req, res);
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

    app.post('/api/imageOptions', function (req, res) {
        console.log("in routes");
        pins.parseImages(req, res);
    })

    app.get('/api/imageGrab', function (req, res) {
        pins.parseImages(req, res);
    })


    //ADD BOARD
    app.post('/newBoard', function (req, res) {
        // console.log(req.body,"in routes");
        boards.createBoard(req, res);
    })

    //SHOW BOARDS
    app.get('/showBoards', function (req, res){
        // console.log(req.body.name,"routesShow")
        boards.show(req,res);
    });
    //DELETE BOARD

     app.post('/deleteBoard', function (req, res) {
        console.log(req.body.content,"in routes");
        boards.delete(req, res);
    })

    app.get('/api/boards', function (req, res) {
        users.getBoards(req, res);
    })

    app.post('/api/createPin', function (req, res) {
        pins.create(req, res);
    })

    app.get('/api/grabUserPins', function (req, res) {
        users.grabUserPins(req, res);
    })

    app.all('*', function (req, res) {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })


    

    
}