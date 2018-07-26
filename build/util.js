const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function assetsPath (_path) {
  return path.posix.join('static', _path)
}

module.exports = {
  resolve,
  assetsPath
}
