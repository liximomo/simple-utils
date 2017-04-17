// selector must be a simple selector
export function eq(selector, n) {
  return `${selector}:first-child:nth-last-child(n+${n}),` +
    `${selector}:first-child:nth-last-child(n+${n}) ~ ${selector}`;
}

export function least(selector, n) {
  return `${selector}:first-child:nth-last-child(n+${n}),` +
    `${selector}:first-child:nth-last-child(n+${n}) ~ ${selector}`;
}

export function most(selector, n) {
  return `${selector}:first-child:nth-last-child(-n+${n}),` +
    `${selector}:first-child:nth-last-child(-n+${n}) ~ ${selector}`;
}

export function between(selector, l, r) {
  return `${selector}:first-child:nth-last-child(n+${l}):nth-last-child(-n+${r}),` +
    `${selector}:first-child:nth-last-child(n+${l}):nth-last-child(-n+${r}) ~ ${selector}`;
}