const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    './src/js/ClientApp.jsx'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /(\.css$)/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
};
