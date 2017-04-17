const typeAssert = {};

const types = ['Number', 'String', 'Null', 'Undefined', 'Boolean', 'Object', 'Function'];

types.forEach(type => {
  typeAssert[`is${type}`] = target =>
    Object.prototype.toString.call(target) === `[object ${type}]`;
});

export default typeAssert;

export function isPromise(val) {
  return val && typeof val.then === 'function';
}
