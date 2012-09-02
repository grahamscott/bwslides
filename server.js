'use strict';

var fs = require('fs'),
	express = require('express'),
	app = express.createServer();

app.get('/', function(req, res){
	fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
	app.use(express.static(__dirname + '/public'));
	app.use(express.errorHandler());
});

app.listen(3000);