'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  var length = funcs ? funcs.length : 0;
  var index = length;
  while (index--) {
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function');
    }
  }
  return function () {
    var index = length - 1;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var result = funcs[index].apply(this, args);
    while (--index >= 0) {
      result = funcs[index].call(this, result);
    }
    return result;
  };
}