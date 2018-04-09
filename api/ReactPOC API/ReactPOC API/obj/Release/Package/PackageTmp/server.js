'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);




//var express = require("express");
////var cors = require('cors')

//var app = express();

////app.use(cors());

//var server = app.listen(3001, function () {
//    console.log("Listening on port %s...", server.address().port);
//});


//app.get("/", function (req, res) {
//    res.send("React POC API");
//});

//app.get("/Artists", function (req, res) {
//    let jsonData = require('./Data/artists.json');
//    return res.send(jsonData);
//});

//app.get("/CssAnimation", function (req, res) {
//    let jsonData = require('./Data/cssAnimation.json');
//    return res.send(jsonData);
//});
