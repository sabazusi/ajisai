var path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
}
