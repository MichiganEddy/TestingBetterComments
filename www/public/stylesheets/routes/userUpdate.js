var express = require('express');
var router = express.Router();
var db = require('./javascripts/database');
var flash = require('express-flash-2');

router.post("/user/:id", function(req, res){
  let userId = req.params.id;
  let userName = req.params.userName;
  let password = req.params.password;
  
  console.log(`Recieved a request to create a new user:\nid: ${userId}\tuserName: ${userName}\tpassword: ${password} `);
  
  db.create({
    "id": userId,
    "userName": userName,
    "password": password,
    "firstName": req.params.firstname,
    "email": req.params.email
  }).then(res.flash('info', 'New User %s saved to database', userName))
  .catch(function(reason){
    console.log(`Error creating user ${userName} because:\n${reason.toString()}`);
  });
  
  res.render('/users', {"title": "Users Listing"});
  
});