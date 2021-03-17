var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

var port = 3030;
app.listen(port, function() {
    console.log('server is running on http://localhost:' + port);
});