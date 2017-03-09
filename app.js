var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('This is only a test');
});

var server = app.listen(8080, function(){
  console.log('Magic is happening on port 8080')
});
