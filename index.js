var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json()); 

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)