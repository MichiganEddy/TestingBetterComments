const modli = require('modli');
const mongo = require('mongodb');
const model = modli.model;
const adapter = modli.adapter;
const Joi = modli.Joi;
const use = modli.use;
const userSchema = require("./joiSchema/User");

adapter.add({
  name: 'mongoDatabase',
  source: mongo,
  config: {
    host: {"127.0.0.1"},
    port: {"27017"},
    username: 'test',
    password: 'test-admin',
    database: 'comments_test'
  }
});

model.add({
  "name": "user",
  "version": 1,
  "collection": "Users",
  "schema": userSchema
});

const usersDB = use("user", "mongoDatabase");
db.createCollection();

module.exports = usersDB;