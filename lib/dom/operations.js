'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createELement = createELement;
function createELement(string) {
  var wpEL = document.createElement('div');

  // remove line breaks from start and end of string
  // trim isn't reliable 
  wpEL.innerHTML = string.replace(/^\s+|\s+$/g, '');
  var els = [];

  while (wpEL.firstChild) {
    els.push(wpEL.removeChild(wpEL.firstChild));
  }
  return els.length > 1 ? els : els[0];
}