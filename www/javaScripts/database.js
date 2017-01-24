'use strict';

var modli = require('modli');
var mongo = require('mongodb');
var model = modli.model;
var adapter = modli.adapter;
var Joi = modli.Joi;
var use = modli.use;
var userSchema = require("./joiSchema/User");

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

model.customValidationError = function (err) {
  console.error("Error validating object. " + err.toString());
};

var usersDB = use("user", "mongoDatabase");
usersDB.createCollection();

module.exports = usersDB;
