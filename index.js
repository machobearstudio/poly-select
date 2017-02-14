var curry = require('curry');
var filter = require('poly-filter');

function select(keys, object) {
  const includeKeys = (keys instanceof Array) ? keys : [keys];

  return filter(function (value, key) {
    return includeKeys.indexOf(key) >= 0
  }, object);
}

module.exports = curry(select);
