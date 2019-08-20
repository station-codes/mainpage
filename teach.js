var express = require('express')
var router = express.Router()

// define the about route
router.get('/', function (req, res) {
  res.render('teach', {
    title:'teach', 
    message:'teach',
    footer:'update 2019-08-01',
    testFile:"blub",
  })
})

// define the about route
router.get('/test', function (req, res) {
  res.render('teach', {
    title:'teach', 
    message:'teach',
    footer:'update 2019-08-01',
    testFile:"this workds",
  })
})


module.exports = router


