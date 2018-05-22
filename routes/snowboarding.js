var express = require('express');
var router = express.Router();


var snowboarding = [
  { id: 1, item: 'Board' },
  { id: 2, item: 'Goggles' },
  { id: 3, item: 'Snow' }
]

/* GET movie listings. */
router.get('/', function(req, res) {
  res.render('item', { item: item });
});

module.exports = router;