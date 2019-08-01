var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
  res.render('page', {
    title:'learn', 
    message:'learn'
  });
})

// define the about route
router.get('/about', function (req, res) {
  res.render('page', {
    title:'learn/about', 
    message:'learn about'
  });
})

module.exports = router


