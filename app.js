
/**
 * Module dependencies.
 */

var express = require('express');
var rest = require('restless');

var app = express();

app.all('/', function(request, response) {
    rest.get('http://reddit.com/.json').on('complete', function(reddit) {
	var titles = "";
	for (var i = 0; i < 5; i++) {
	    titles += reddit.data.children[i].data.title;
	    }
	response.send(titles);
    });
});

var port = process.env.PORT || 5000;
app.listen((port, function() {
    console.log("Launching on " + port);
});

