var path = require('path')

module.exports = {
  entry: './src/web/js/entry.js',
  output: {
    path: path.join(__dirname, 'dist/public/js'),
    publicPath: '',
    filename: 'main.js'
  }
}
