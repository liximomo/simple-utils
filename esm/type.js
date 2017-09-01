var createAssert = function createAssert(type) {
  return function (target) {
    return Object.prototype.toString.call(target) === '[object ' + type + ']';
  };
};

export var isNumber = createAssert('Number');
export var isString = createAssert('String');
export var isNull = createAssert('Null');
export var isUndefined = createAssert('Undefined');
export var isBoolean = createAssert('Boolean');
export var isArray = createAssert('Array');
export var isFunction = createAssert('Function');
export var isObject = createAssert('Object');