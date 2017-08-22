var request = require('request');
var cheerio = require('cheerio');
var rp = require('request-promise');

function parseImages(url) {
    // var x;
    return request(url, function (error, response, body) {
        // var list = [];
        var $ = cheerio.load(body);
        $('img').each(function(){
            var src = $(this).attr("src");
            list.push(src);
            // console.log("__________________")
            // console.log(list`);
            // console.log(src)
            // console.log("_____&&____")
        });
        // console.log(list);
        return list;
    });
    // }).then(function(response){
    //     x = "hello";
    //     return x;
    // });
}

function imageList(url){
    this.list = []
    request(url, function (error, response, body) {
        var $ = cheerio.load(body);
        $('img').each(function(){
            var src = $(this).attr("src");
            this.list.push(src);
        });
    });
}

// var berries = new imageList('http://www.fromvalerieskitchen.com/blackberry-lemonade-margaritas/')
// console.log(berries.list);

function collectImages($) {
    return $("img").map(function() {
        return $(this).prop("src");
    }).get();
}

console.log(collectImages('http://www.fromvalerieskitchen.com/blackberry-lemonade-margaritas/'))

// function parseImages(url){
//     request(url, function (error, response, body) {
//         var $ = cheerio.load(body);
//         collectImages($);
//         return;
//     });
// }

// var imageReturn = parseImages('http://www.fromvalerieskitchen.com/blackberry-lemonade-margaritas/');
// console.log(imageReturn);
// console.log(parseImages('http://www.fromvalerieskitchen.com/blackberry-lemonade-margaritas/'))

// console.log(collectImages('http://www.fromvalerieskitchen.com/blackberry-lemonade-margaritas/', parseImages));
// console.log(parseImages('http://www.fromvalerieskitchen.com/blackberry-lemonade-margaritas/'));