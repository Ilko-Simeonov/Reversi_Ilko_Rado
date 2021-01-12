var express = require("express");
var http = require("http");

var port = process.argv[2];
var app = express();

app.use(express.static("C:\\Users\\ilkos\\Desktop\\Assignment 2\\game2\\myapp" + "\\public"));
http.createServer(app).listen(port);

module.exports=app;