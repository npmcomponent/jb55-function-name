
module.exports = function(fn) {
  if (fn.name != null) return fn.name;
  var matches = /^function\s+(.*)?\s*\(/.exec(fn.toString());
  var match = matches[1];
  return match == null? "" : match;
}
