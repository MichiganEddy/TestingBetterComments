'use strict';

var Joi = require('joi');
var morgan = require('morgan');
var m = morgan;
var utl = require('../Utils.js');

var personSchSch = { // the joi schema object - schema object type: person 
  // Person Sch Sch 
  "id": Joi.number().positive().integer().min(100000),
  "firstName": Joi.string().alphanum().min(3).max(30).required(),
  "lastName": Joi.string().alphanum().min(2).max(30),
  "email": Joi.string().email(),
  "phone": Joi.string().regex(/\+?1?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}/),
  "city": Joi.string().alphanum().min(3).max(40),
  "state": Joi.string().alphanum().min(2).max(30)
};

var personSchema = Joi.object(personSchSch);
var personSch = Joi.compile(personSchema);

var PassGuy = {
  id: 205648836,
  firstName: "Ramula",
  lastName: "Bartun",
  email: "RamBart@gmail.com",
  phone: "235-665-9963",
  city: "testVille",
  state: "MN"
};

var FailGuy = {
  id: 20564883,
  firstName: "-+Ramula",
  lastName: "Bartun",
  email: "RamBart@",
  phone: "235-665-9963",
  city: "testVille",
  state: "MN"
};

Joi.validate(PassGuy, personSch, function (err, value) {
  var message = err ? console.error("PassGuy failed with : " + err.toString()) : null;
  return message;
});

Joi.validate(FailGuy, personSch, function (err, value) {
  var message = err ? null : console.error("FailGuy Passed?? ->:\n " + JSON.parse(FailGuy).toString());
  return message;
});

var keys = personSch.keys();

console.log("Person.js loaded. Exporting personSchema.\n");

for (var key in keys) {

  utl.vOpObj(personSch[key]);
}

module.exports.personSch = personSch;
module.exports.PassGuy = PassGuy;
module.exports.FailGuy = FailGuy;