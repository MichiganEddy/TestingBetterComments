'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('express-flash-2');
var session = require('express-session')({
  cookie: { maxAge: 60 * 60 * 4 },
  secret: 'temporary_secret_salt', // Bcrypt Salts Need to be added!
  resave: true, saveUninitialized: true });
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');
var fs = require('fs');

// DB Implentation not completed.
var usersDB = require('./javaScripts/database');

// Import the routes files. 
var users = require('./routes/users');
var userShow = require('./routes/userView');
var newUser = require('./routes/newUser');
var updateUser = require('./routes/userUpdate');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Simple Username Password Authentication Method.
passport.use(new Strategy(function (username, password, callback) {
  usersDB.users.findByUsername(username, function (err, user) {
    if (err) {
      return callback(err);
    }
    if (!user) {
      return callback(null, false);
    }
    if (user.password !== password) {
      return callback(null, false);
    }
    return callback(null, user);
  });
}));

passport.serializeUser(function (user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function (id, callback) {
  usersDB.users.findById(id, function (err, user) {
    if (err) {
      return callback(err);
    }
    callback(null, user);
  });
});

var logStream = fs.createWriteStream(path.join(__dirname, 'application.log'), { flags: "a" });

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev', { "immediate": true, "stream": logStream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(usersDB);

// Give all the routes to the app. 
app.use(index);
app.use(users);
app.use(userShow);
app.use(newUser);
app.use(userUpdate);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log('Error handling a request: ' + req.path);
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
