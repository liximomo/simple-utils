'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createAssert = function createAssert(type) {
  return function (target) {
    return Object.prototype.toString.call(target) === '[object ' + type + ']';
  };
};

var isNumber = exports.isNumber = createAssert('Number');
var isString = exports.isString = createAssert('String');
var isNull = exports.isNull = createAssert('Null');
var isUndefined = exports.isUndefined = createAssert('Undefined');
var isBoolean = exports.isBoolean = createAssert('Boolean');
var isArray = exports.isArray = createAssert('Array');
var isFunction = exports.isFunction = createAssert('Function');
var isObject = exports.isObject = createAssert('Object');