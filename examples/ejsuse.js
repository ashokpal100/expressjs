var express = require('express');
var ejs = require('ejs');
var app = express();

app.get('/', function(req, res)
{

    console.log('Time: %d', Date.now());
});
app.listen(9000);
console.log("hii");