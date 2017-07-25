var express = require('express');
var server = express();
var foods = require('./foods');

var port = process.env.PORT || 3000;

server.get('/foods', function (req, res) {
    res.send(foods);
});

server.use('/', express.static(__dirname + '/', {extensions: ['html']}));
server.listen(port);

console.log('Listening on port ' + port);
