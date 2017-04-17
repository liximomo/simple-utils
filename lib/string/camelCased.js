'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelCased;
exports.camelCasedKeys = camelCasedKeys;

var _type = require('../type');

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function camelCased(str) {
  return str.replace(/_([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

function camelCasedKeys(obj) {
  return Object.keys(obj).reduce(function (camelCasedObject, key) {
    var value = obj[key];
    if (_type2.default.isObject(value)) {
      value = camelCasedKeys(value);
    }
    camelCasedObject[camelCased(key)] = value;
    return camelCasedObject;
  }, {});
}