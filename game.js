var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
  res.render('page', {
    title:'game', 
    message:'game'
  });
})

// define the about route
router.get('/about', function (req, res) {
  res.render('page', {
    title:'game/about', 
    message:'game about'
  });
})

module.exports = router


