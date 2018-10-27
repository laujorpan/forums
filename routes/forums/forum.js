var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('forums/forum', { });
});

router.get('/room/:key', function(req, res, next) {
    let room_key=req.params.key;
    console.log("KEY: "+room_key);

    res.render('forums/chat', { key: room_key });
});

module.exports = router;
