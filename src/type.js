const createAssert = type => target =>
  Object.prototype.toString.call(target) === `[object ${type}]`;

export const isNumber = createAssert('Number');
export const isString = createAssert('String');
export const isNull = createAssert('Null');
export const isUndefined = createAssert('Undefined');
export const isBoolean = createAssert('Boolean');
export const isArray = createAssert('Array');
export const isFunction = createAssert('Function');
export const isObject = createAssert('Object');

