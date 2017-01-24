let Joi = require('joi');
let personSchema = require("./Person.js");

let userSchema = personSchema.keys({
  "userName": Joi.string().alphanum().min(2).max(30).required(),
  "password": Joi.string().regex(/[\w\d.\-\\\][!@#$%^&*()+'"]{8,60}/).required(),
  "admin": Joi.boolean().default(false)
});