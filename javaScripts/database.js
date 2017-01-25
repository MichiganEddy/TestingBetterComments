import { model, adapter } from 'modli'
const mongo = require('modli-mongo');
const Joi = require('joi');
const use = require('use');
import { userSchSch, userSchema } from "./joiSchema/User.js";

let log_module_status = function(){
    console.log("Status form database.js: Have a model, an adapter, and a database.");
    
    console.log(`Model ... type: ${typeof(model)} ... name: ${model.values} ... `);
    console.log(`Adapter ... type: ${typeof(adapter)} ... attrs: ${adapter.values}`);
    console.log(`Database: ... type: ${typeof(usersDB)} ... attrs: ${usersDB.values}`);
}


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
  "version": 1,
  "tableName": "Users",
  "schema": userSchSch
});

model.customValidationError = (err) => {
  console.error("Error validating object. " + err.toString());
}

const usersDB = use(model, adapter);

log_module_status();


usersDB.createCollection();

module.exports = usersDB;

