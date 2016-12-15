var curry = require('curry')
var filter = require('poly-filter')

function select(includeKeys, object) {
  return filter((value, key) => includeKeys.indexOf(key) >= 0, object)
}

module.exports = curry(select)
