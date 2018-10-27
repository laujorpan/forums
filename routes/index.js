var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!res.locals.user){
    res.render('index');
  }else{
    res.redirect('/forums');
  }
});

/* POST login - home page. */
router.post('/login', function(req, res, next) {
  const { nickname } = req.body;
  req.session.user = nickname;
  res.redirect('/forums');
});

// Logout endpoint
router.get('/logout', (req, res) => {
  req.session = null
  res.redirect('/?logout=true');
});

module.exports = router;
