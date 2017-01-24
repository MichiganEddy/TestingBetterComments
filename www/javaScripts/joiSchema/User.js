"use strict";

var Joi = require('joi');
var personSchema = require("./Person.js");

var userSchema = personSchema.keys({
  "userName": Joi.string().alphanum().min(2).max(30).required(),
  "password": Joi.string().regex(/[\w\d.\-\\\][!@#$%^&*()+'"]{8,60}/).required(),
  "admin": Joi.boolean().default(false)
});

module.exports = personSchema;