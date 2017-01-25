let Joi = require('joi');
let Person = require("./Person.js");
let personSch = Person.personSch;
const utl = require('../Utils.js');


//Validate required objects. 
Joi.validate(Person.PassGuy, personSch, function(err, value){
  let message = err? console.error("PassGuy failed with : " + err.toString()) : null ;
  return message;
});

Joi.validate(Person.FailGuy, personSch, function(err,value) {
  let message = err? null : console.error("FailGuy Passed?? ->:\n " +  Person.FailGuy.toString());
  return message;
});
console.log("Person.js loaded into User. Exporting personSchema.\n");


let keys = personSch.keys();
for(let key in keys){
  utl.vOpObj(personSch[key]);
}



const userSchSch = 
  {
    "userName": Joi.string().alphanum().min(2).max(30).required(),
    "password": Joi.string().regex(/[\w\d.\-\\\][!@#$%^&*()+'"]{8,60}/).required(),
    "admin": Joi.boolean().default(false)
  }

let schmaProcess = Joi.object(userSchSch);

const userSchema = Joi.compile(personSch.concat(schmaProcess));

console.log("Loaded User.js. ");



module.exports.userSch  = userSchema;
module.exports.userSchSch = userSchSch;

const PassGuy = {
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
}


const FailGuy = {
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
}

module.exports.pf = [PassGuy, FailGuy];