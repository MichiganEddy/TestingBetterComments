'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _modli = require('modli');

var mongo = require('modli-mongo');
var Joi = require('joi');
var use = require('use');
var userSchema = require("./joiSchema/User");

var log_module_status = function log_module_status() {
  console.log("Status form database.js: Have a model, an adapter, and a database.");

  console.log('Model ... type: ' + (typeof _modli.model === 'undefined' ? 'undefined' : _typeof(_modli.model)) + ' ... name: ' + _modli.model.values + ' ... ');
  console.log('Adapter ... type: ' + (typeof _modli.adapter === 'undefined' ? 'undefined' : _typeof(_modli.adapter)) + ' ... attrs: ' + _modli.adapter.values);
  console.log('Database: ... type: ' + (typeof usersDB === 'undefined' ? 'undefined' : _typeof(usersDB)) + ' ... attrs: ' + usersDB.values);
};

_modli.adapter.add({
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

_modli.model.add({
  "name": "User",
  "version": 1,
  "tableName": "Users",
  "schema": "userSchema"
});

_modli.model.customValidationError = function (err) {
  console.error("Error validating object. " + err.toString());
};

var usersDB = use("User", "mongoDatabase");

log_module_status();

usersDB.createCollection();

module.exports = usersDB;
