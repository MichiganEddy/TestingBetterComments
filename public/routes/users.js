var express = require('express');
var router = express.Router();
var usersDB = require('../../javaScripts/database').usersDB;

/* GET users listing. */
router.get('/users', function(req, res, next) {
  let _users = userDB.read();
  res.render('users', { title: "List Users", users: _users});
});

module.exports = router;
