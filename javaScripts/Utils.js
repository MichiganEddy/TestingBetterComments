const obj_keys_p = (keylessObject) => {
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

module.exports.obj_keys_p= obj_keys_p;




const vOpObj = function(mno){
  if(mno && mno.toString()){
//  console.log('inside vOp with ' + mno.toString());}
  
  let returning = function(maybeNestedObject){
        //     if(typeof(maybeNestedObject) === "object" && !Object.keys(maybeNestedObject)){obj_keys_p(maybeNestedObject)}
        // 
        // let tks = Object.keys(maybeNestedObject);
        // 
        // for(let k in tks){
        //   if(maybeNestedObject[k][Symbol.iterator] && typeof(maybeNestedObject[k][Symbol.iterator]) === 'function'){
        //     vOpObj(maybeNestedObject[k]);
        //   }
        // else {
          if(maybeNestedObject) {console.log(`\t${maybeNestedObject}\n `);}
  //  }}
  }
    return returning(mno);
  }
}


module.exports.vOpObj = vOpObj;