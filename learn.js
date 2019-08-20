var express = require('express')
var router = express.Router()
var hl = require("highlight").Highlight;

// define the about route
router.get('/', function (req, res) {
  res.render('learn/learn', {
    title:'learn', 
    footer:'update 2019-08-01',
    info:"learning stuff",
  })
})


router.get("/aoc/2019/01", function(req, res ){
  res.render('learn/aoc', {
    title:'aoc',
    footer:'update 2019-08-11',
    data:{
      filename:"day01.md",
      day:1
    },
  })
})

router.get("/aoc/2019/02", function(req, res ){
  res.render('learn/aoc', {
    title:'aoc',
    footer:'update 2019-08-11',
    data:{
      filename:"day02.md",
      day:2
    },
  })
})

router.get("/aoc/2019/03", function(req, res ){
  res.render('learn/aoc', {
    title:'aoc',
    footer:'update 2019-08-11',
    data:{
      filename:"day03.md",
      day:3
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


