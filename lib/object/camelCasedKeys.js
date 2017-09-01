'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelCasedKeys;

var _type = require('../type');

var _type2 = _interopRequireDefault(_type);

var _camelCased = require('../string/camelCased');

var _camelCased2 = _interopRequireDefault(_camelCased);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function camelCasedKeys(obj) {
  var includeArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (_type2.default.isArray(obj)) {
    return obj.map(camelCasedKeys);
  }

  return Object.keys(obj).reduce(function (camelCasedObject, key) {
    var value = obj[key];
    if (_type2.default.isObject(value)) {
      value = camelCasedKeys(value);
    } else if (includeArray && _type2.default.isArray(value)) {
      value = camelCasedKeys(value);
    }

    camelCasedObject[(0, _camelCased2.default)(key)] = value;
    return camelCasedObject;
  }, {});
}