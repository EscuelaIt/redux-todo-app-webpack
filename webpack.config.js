const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      },
   ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new HtmlWebpackPlugin({
      title: 'Hola APP',
      template:  path.resolve(__dirname, 'src/index.html'),
    })
  ]
}
