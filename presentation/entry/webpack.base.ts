const path = require('path')

interface IConfig {
  entry: string|Array<string>|Object // { <key>: string | Array<string> }
}

const entryConfigOne = {
  entry: [
    path.resolve(__dirname, '../src/index.js')
  ]
}

const entryConfigTwo = {
  entry: path.resolve(__dirname, '../src/index.js')
}

const entryConfigThree = {
  entry: {
    'main': '../src/index.js',
    'vender': '/path/to/vender.js'
  }
}

const entryConfigFour = {
  entry: {
    'main': '../src/index.js',
    'vender': ['/path/to/vender.js', '/path/to/excess.js']
  }
}