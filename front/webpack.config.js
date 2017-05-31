var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '../back/public'),
    publicPath: '',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } }
    ]  
  }
}
