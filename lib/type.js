'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = isPromise;
var typeAssert = {};

var types = ['Number', 'String', 'Null', 'Undefined', 'Boolean', 'Object', 'Function'];

types.forEach(function (type) {
  typeAssert['is' + type] = function (target) {
    return Object.prototype.toString.call(target) === '[object ' + type + ']';
  };
});

exports.default = typeAssert;
function isPromise(val) {
  return val && typeof val.then === 'function';
}