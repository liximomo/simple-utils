export function clientHeight(el) {
  if (el === window) {
    return window.innerHeight;
  }

  return el.clientHeight;
}

export function clientWidth(el) {
  if (el === window) {
    return window.innerWidth;
  }

  return el.clientWidth;
}
  

export function innerHeight(el) {
  if (el === window) {
    return window.innerHeight;
  }

  return el.clientHeight;
}


export function innerWidth(el) {
  if (el === window) {
    return window.innerWidth;
  }

  return el.clientWidth;
}

export function scrollTop(el) {
  if (el === window) {
    return window.scrollY || Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  }

  return el.scrollTop;
}

export function documentHeight() {
  return Math.max(document.body.scrollHeight, document.body.offsetHeight,
    document.documentElement.clientHeight, document.documentElement.scrollHeight,
    document.documentElement.offsetHeight);
}

export function scrollHeight(el) {
  // TODO
  if (el === window) {
    return documentHeight();
  }

  return el.scrollHeight;
}

export function scrollWidth(el) {
  // TODO
}

