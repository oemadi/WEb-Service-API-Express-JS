var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/me', function (req, res, next) {
  res.send(process.env.APP_NAME);
});

router.get('/json', function (req, res) {
  res.json({
    message: 'My name Oemadi Oc OKE'

  });
});
module.exports = router;
