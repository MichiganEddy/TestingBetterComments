var express = require('express');
var router = express.Router();

/* GET articles listing page. */
router.param( ['/', '/users', '/index', '/home'], function(req, res, next) {
  res.render('users', { title: 'Users Listing' });
});

module.exports = router;
