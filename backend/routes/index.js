var cors = require('cors');
var express = require('express');
var router = express.Router();

const results = [
  { name: 'kevin', city: 'kampala' },
  { name: 'Jonny', city: 'Stockholm' },
  { name: 'Jonas', city: 'Berlin' }
]

/* GET home page. */
router.get('/', cors(), function(req, res) {
  res.send(results);
});

router.post('/', function(req, res) {
  results.push(req.body);
  res.send(results);
})

module.exports = router;
