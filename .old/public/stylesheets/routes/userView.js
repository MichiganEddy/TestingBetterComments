var express = require('express');
var router = express.Router();

/* User Details View  */
router.get('/user/:id', function(req, res, next) {
  res.user = User.find(req.user.id);
  res.render('profile', {"title": `${res.user.userName}'s Profile`});
});

module.exports = router;
