const express = require('express');
const get_heroes = require('../core/get_heroes')
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var heroes = get_heroes
  console.log(heroes)
});

module.exports = router;
