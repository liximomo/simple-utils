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

export default function escapeHtml(string) {
  // eslint-disable-next-line prefer-arrow-callback
  return String(string).replace(/[&<>"'`=/]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}