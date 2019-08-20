var express = require('express')
var router = express.Router()
var hl = require("highlight").Highlight;

// define the about route
router.get('/', function (req, res) {
  res.render('learn/learn', {
    title:'learn', 
    footer:'update 2019-08-01',
    info:"learning stuff",
    aocYears:["2019", "2018", "2017"],
  })
})


router.get("/aoc/20*", function(req, res ){
  res.render('learn/aoc', {
    title:'aoc',
    footer:'update 2019-08-11',
    data:{
      filename:"day01.md",
      day:1
    },
  })
})

router.get("/stm", function(req, res){
  res.render('learn/stm', {
    title: "learn/stm",
    message: "stm stuff",
    text: "text stm",
  })
})

module.exports = router


