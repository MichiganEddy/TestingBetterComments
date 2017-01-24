const Joi = require('joi');

const personSchema = Joi.object().keys({
  "id": Joi.number().positive().integer().min(100000),
  "firstName": Joi.string().alphanum().min(3).max(30).required(),
  "lastName": Joi.string().alphanum().min(2).max(30),
  "email": Joi.string().email(),
  "phone": Joi.string().regex(/\+?1?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}/),
  "city": Joi.string().alphanum().min(3).max(40),
  "state": Joi.string().alphanum().min(2).max(30)
});

module.exports = personSchema;