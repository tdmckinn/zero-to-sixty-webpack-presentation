const path = require('path')

interface IConfig {
  entry: string|Array<string>
}

const entryConfigOne: IConfig = {
  entry: [
    path.resolve(__dirname, '../src/index.js')
  ]
}

const entryConfigTwo: IConfig = {
  entry: path.resolve(__dirname, '../src/index.js')
}

const entryConfigThree: IConfig = {
  entry: [0]
}


module.exports = config