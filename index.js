var express = require('express')
var stylus = require('stylus')
var nib = require('nib')
var app = express();

var work = require('./work.js')
var learn = require('./learn.js')
var teach = require('./teach.js')
var game = require('./game.js')
var sail = require('./sail')

/* dont use jade anymore, pug is the new name */
app.set('view engine', 'jade')
//app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
  res.locals.user = req.user;
  console.log("app req, res, next")
  next();
});

app.get('/', function (req, res) {
  res.render('index', {
    title:'station.codes', 
    //footer:'last update 2019-08-01',
    name: {
      first:'n', 
      second:'du'}, 
  })
})

app.listen(31898)

app.use('/work', work)
app.use('/learn', learn)
app.use('/teach', teach)
app.use('/game', game)
app.use('/sail', sail)