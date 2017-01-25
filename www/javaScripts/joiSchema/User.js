'use strict';

var Joi = require('joi');
var Person = require("./Person.js");
var personSch = Person.personSch;
var utl = require('../Utils.js');

//Validate required objects. 
Joi.validate(Person.PassGuy, personSch, function (err, value) {
  var message = err ? console.error("PassGuy failed with : " + err.toString()) : null;
  return message;
});

Joi.validate(Person.FailGuy, personSch, function (err, value) {
  var message = err ? null : console.error("FailGuy Passed?? ->:\n " + Person.FailGuy.toString());
  return message;
});
console.log("Person.js loaded into User. Exporting personSchema.\n");

var keys = personSch.keys();
for (var key in keys) {
  utl.vOpObj(personSch[key]);
}

var userSchSch = {
  "userName": Joi.string().alphanum().min(2).max(30).required(),
  "password": Joi.string().regex(/[\w\d.\-\\\][!@#$%^&*()+'"]{8,60}/).required(),
  "admin": Joi.boolean().default(false)
};

var schmaProcess = Joi.object(userSchSch);

var userSchema = Joi.compile(personSch.concat(schmaProcess));

console.log("Loaded User.js. ");

module.exports.userSch = userSchema;
module.exports.userSchSch = userSchSch;

var PassGuy = {
  userName: "Viking66",
  password: "Legit89))Pa$$W0rd",
  admin: true,
  id: 205648836,
  firstName: "Ramula",
  lastName: "Bartun",
  email: "RamBart@gmail.com",
  phone: "235-665-9963",
  city: "testVille",
  state: "MN"
};

var FailGuy = {
  userName: "V",
  password: "LeW0rd",
  admin: true,
  id: 205648836,
  firstName: "Ramula",
  lastName: "Bartun",
  email: "RamBart@gmail.com",
  phone: "235-665-9963",
  city: "testVille",
  state: "MN"
};

module.exports.pf = [PassGuy, FailGuy];