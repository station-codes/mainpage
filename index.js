var express = require('express')
var stylus = require('stylus')
var nib = require('nib')


var app = express();

var work = require('./work.js')
var learn = require('./learn.js')
var teach = require('./teach.js')
var game = require('./game.js')
var sail = require('./sail')

app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
  res.render('index', {
    title:'station.codes', 
    message:'',
    text:'my metrics',
    footer:'last update 2019-08-01',
  });
});

app.listen(31898);

app.use('/work', work);
app.use('/learn', learn);
app.use('/teach', teach);
app.use('/game', game);
app.use('/sail', sail);