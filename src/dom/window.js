/* eslint-disable no-nested-ternary */
export function width() {
  return (screen.width > 0)
    ? (window.innerWidth >= screen.width || window.innerWidth == 0)
      ? screen.width : window.innerWidth
      : window.innerWidth;
}

export function height() {
  return (screen.height > 0)
    ? (window.innerHeight >= screen.height || window.innerHeight == 0)
      ? screen.height : window.innerHeight
      : window.innerHeight;
}

export function scrollTop() {
  return window.scrollY || document.documentElement.scrollTop;
}
