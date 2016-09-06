var path = require('path');
var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css",
        include: path.resolve(__dirname, '../', 'src', 'styles.css')
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        include: path.resolve(__dirname, '../', 'resources', 'images')
      }
    ]
  }
}
