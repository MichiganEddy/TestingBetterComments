'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var obj_keys_p = function obj_keys_p(keylessObject) {
  // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  Object.keys = function () {
    'use strict';

    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
        dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
      if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [],
          prop,
          i;

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
  }();
};

module.exports.obj_keys_p = obj_keys_p;

var vOpObj = function vOpObj(mno) {
  if (mno && mno.toString()) {
    //  console.log('inside vOp with ' + mno.toString());}

    var returning = function returning(maybeNestedObject) {
      //     if(typeof(maybeNestedObject) === "object" && !Object.keys(maybeNestedObject)){obj_keys_p(maybeNestedObject)}
      // 
      // let tks = Object.keys(maybeNestedObject);
      // 
      // for(let k in tks){
      //   if(maybeNestedObject[k][Symbol.iterator] && typeof(maybeNestedObject[k][Symbol.iterator]) === 'function'){
      //     vOpObj(maybeNestedObject[k]);
      //   }
      // else {
      if (maybeNestedObject) {
        console.log('\t' + maybeNestedObject + '\n ');
      }
      //  }}
    };
    return returning(mno);
  }
};

module.exports.vOpObj = vOpObj;
