var express = require("express");

var app = express();
const port = 880;
app.use(express.static('public'));
//make way for some custom css, js and images
//app.use('/css', express.static(__dirname + '/public/css'));
//app.use('/js', express.static(__dirname + '/public/js'));
//app.use('/img', express.static(__dirname + '/public/img'));

var server = app.listen(8081, function(){
    var port = server.address().port;
	console.log("1");
    console.log("Server started at http://localhost:%s", port);
});