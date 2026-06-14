var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('meals', { title: 'Meals - Travlr Getaways' });
});

module.exports = router;