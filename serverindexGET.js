var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/indexGET.html', function (req, res) {
   res.sendFile( __dirname + "/" + "indexGET.html" );
})

app.get('/process_get', function (req, res) {

   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(9090, function () {

  var host = server.address().address
  var port = server.address().port

  //console.log("Example app listening at http://%s:%s", host, port)

})