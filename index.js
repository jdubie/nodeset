/*
 * Set implementation in javascript
 * Only use with strings
 */
exports = module.exports = Set = function () {
  this._ = {};
}

Set.prototype.add = function(value) {
  this._[value] = true;
}

Set.prototype.remove = function(value) {
  delete this._[value];
}

Set.prototype.values = function() {
  return Object.keys(this._);
}

