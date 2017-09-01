export default function compose(...funcs) {
  const length = funcs ? funcs.length : 0;
  let index = length;
  while (index--) {
    if (typeof funcs[index] != 'function') {
      throw new TypeError('Expected a function');
    }
  }
  return function(...args) {
    let index = length - 1;
    let result = funcs[index].apply(this, args);
    while (--index >= 0) {
      result = funcs[index].call(this, result);
    }
    return result;
  };
}
