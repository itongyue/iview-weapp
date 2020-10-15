const path = require('path')
const cwd = process.cwd()

function getProjectPath(...filePath) {
  return path.resolve(cwd, '..', ...filePath)
}

module.exports = {
  getProjectPath
}
