"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowEqual;
exports.shallowEqualBut = shallowEqualBut;
exports.shallowEqualWith = shallowEqualWith;
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

function shallowEqualBut(objA, objB) {
  var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);

  var excludeArray = [].concat(exclude);
  if (excludeArray.length) {
    var filterExcluded = function filterExcluded(key) {
      return !~excludeArray.indexOf(key);
    };
    keysA = keysA.filter(filterExcluded);
  }
  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

function shallowEqualWith(objA, objB) {
  var include = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);

  var includeArray = [].concat(include);
  if (includeArray.length) {
    var filterInclude = function filterInclude(key) {
      return ~includeArray.indexOf(key);
    };
    keysA = keysA.filter(filterInclude);
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}