export default function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  const hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) ||
        objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

export function shallowEqualBut(objA, objB, exclude = []) {
  if (objA === objB) {
    return true;
  }

  let keysA = Object.keys(objA);

  const excludeArray = [].concat(exclude);
  if (excludeArray.length) {
    const filterExcluded = key => !~excludeArray.indexOf(key);
    keysA = keysA.filter(filterExcluded);
  }
  // Test for A's keys different from B.
  const hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) ||
        objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

export function shallowEqualWith(objA, objB, include = []) {
  if (objA === objB) {
    return true;
  }

  let keysA = Object.keys(objA);

  const includeArray = [].concat(include);
  if (includeArray.length) {
    const filterInclude = key => ~includeArray.indexOf(key);
    keysA = keysA.filter(filterInclude);
  }

  // Test for A's keys different from B.
  const hasOwn = Object.prototype.hasOwnProperty;
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) ||
        objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}
