'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escapeHtml;
var entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml(string) {
  // eslint-disable-next-line prefer-arrow-callback
  return String(string).replace(/[&<>"'`=/]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}