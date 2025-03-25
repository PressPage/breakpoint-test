const argv = require('yargs').argv;
const path = require('path');
const fs = require('fs');

const version = JSON.parse(fs.readFileSync('./package.json').toString()).version

const rename = (filePath, file) => {
  const relativePath = path.relative(path.join(argv.path, 'vt'), file.dirname)
  const relativePathSplit = relativePath.split('/')
  const fileType = relativePathSplit.at(0) || ''
  const base = fileType === 'locale'
    ? relativePathSplit.slice(0, -1).join('-')
    : relativePathSplit.at(0)
  const clientName = path.normalize(path.join(argv.path, '../')).split('/').at(-2)
  let basename
  if (fileType === 'core') basename = `pp-vt-core-v${version}`
  else basename = `pp-${clientName}-${base}`
  const dirname = fileType === 'core' ? '/vanilla-template-core' : '/'
  const extname = `.min${filePath.extname}`
  return { ...filePath, extname, basename, dirname }
}

exports.default = rename  