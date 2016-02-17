var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('entary point');
});
  app.listen(9000);

