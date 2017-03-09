var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World. I am Diginick.com. This is only a test. But at least it passed.');
});

var server = app.listen(8080, function(){
  console.log('Magic is happening on port 8080')
});
