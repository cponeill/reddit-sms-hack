
/**
 * Module dependencies.
 */

var express = require('express');
var restler = require('restler');

var app = express();

app.all('/', function(request, response) {
  restler.get('http://reddit.com/.json').on('complete', function(reddit){
  	var titles = "";
  	for (var i = 0; i < 5; i++) {
  	  titles += reddit.data.children[i].data.title;
  	}
  	response.send(titles);
  });
});

