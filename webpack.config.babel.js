import webpack from 'webpack';
import path from 'path';

export default {
  entry: './src/main-window.js',
  output: {
    filename: 'output.js'
  },
  target: 'electron-renderer',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, '../', 'src')],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
