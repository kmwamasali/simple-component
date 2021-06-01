var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  const results = [
    { name: 'kevin', city: 'kampala' },
    { name: 'Jonny', city: 'Stockholm' },
    { name: 'Jonas', city: 'Berlin' }
  ]
  res.send(results);
});

module.exports = router;
