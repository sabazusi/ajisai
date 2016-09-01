var path = require('path');
var webpack = require('webpack');

console.log(path.resolve(__dirname, '../', 'resources', 'images'));
module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css",
        include: path.resolve(__dirname, '../', 'src')
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        include: path.resolve(__dirname, '../', 'resources', 'images')
      }
    ]
  }
}
