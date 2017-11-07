const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractLess = new ExtractTextPlugin({
    filename: "index.css"
})
const htmlWebpack = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`
})
const nodeEnv = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, './build'),
    publicPath: '',
    filename: 'main.js'
  },
  plugins: [
    extractLess,
		htmlWebpack,
    nodeEnv
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules)/, loader: "babel-loader", query: { presets: ['react', 'env']} },
        { test: /\.scss$/, use: extractLess.extract({ use: [ { loader: "css-loader"}, { loader: "sass-loader" } ], fallback: "style-loader" })},
        { test: /\.css$/, use: extractLess.extract({ use: [ { loader: "css-loader", options: { modules: true, sourceMap: true, importLoaders: 1, localIdentName: "[name]--[local]--[hash:base64:8]" }}, { loader: "sass-loader" } ], fallback: "style-loader" })},
        { test: /\.less$/, use: extractLess.extract({ use: [ { loader: "css-loader"}, { loader: "less-loader"} ], fallback: "style-loader" })},
      { test: /\.(eot|woff|woff2|ttf|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000&name=[name].[ext]' },
      { test: /\.svg/, use: { loader: 'svg-url-loader', options: {} }}
    ]  
  }
}
