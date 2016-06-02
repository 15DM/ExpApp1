var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express App', user: 'Craig' });
  res.send({ title: 'Express App', user: 'Craig' });
});

module.exports = router;
