var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
  res.render('page', {
    title:'sail', 
    message:'sail'
  })
})

// define the about route
router.get('/about', function (req, res) {
  res.render('page', {
    title:'sail/about', 
    message:'sail about'
  })
})



module.exports = router


