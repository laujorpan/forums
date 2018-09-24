var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

/* POST login - home page. */
router.post('/login', function(req, res, next) {
  const { nickname } = req.body;
  req.session.user = nickname;
  res.redirect('/forums');
});

module.exports = router;
