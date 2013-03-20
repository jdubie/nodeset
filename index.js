/*!
 * set
 * Jack Dubie
 */

/**
 * Expose `Set`.
 */

exports = module.exports = Set = function () {
  this._ = {};
}

/**
 * Add `value` to set
 *
 * @param {String} value
 * @api public
 */

Set.prototype.add = function(value) {
  this._[value] = true;
}

/**
 * Add all `values` to set
 *
 * @param {Array.<String>} values
 * @api public
 */

Set.prototype.addAll = function(values) {
  for (var i in values)
    this.add(values[i]);
}

/**
 * Removes `value` from set
 *
 * @param {String} value
 * @api public
 */

Set.prototype.remove = function(value) {
  delete this._[value];
}

/**
 * Returns all values in set
 *
 * @return {Array.<String>}
 * @api public
 */

Set.prototype.values = function() {
  return Object.keys(this._);
}
