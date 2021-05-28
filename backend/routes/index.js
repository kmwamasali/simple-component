var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const results = [
    { name: 'kevin', city: 'kampala' },
    { name: 'Jonny', city: 'Stockholm' },
    { name: 'Jonas', city: 'Berlin' }
  ]
  req.body.results = results;
  next();
});

module.exports = router;
