var express = require('express');
var app = express();

var work = require('../workpage/work.js');

// respond with "hello world" when a GET request is made to the homepage

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(31898);

app.use('/work', work);
