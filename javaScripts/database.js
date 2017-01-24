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
    host: "127.0.0.1",
    port: "27017",
    username: 'test',
    password: 'test-admin',
    database: 'comments_test'
  }
});

model.add({
  "name": "User",
  "tableName": "testable",
  "version": 1,
  "collection": "Users",
  "schema": userSchema
});

model.customValidationError = (err) => {
  console.error("Error validating object. " + err.toString());
}

const usersDB = use("user", "mongoDatabase");
usersDB.createCollection();

module.exports = usersDB;