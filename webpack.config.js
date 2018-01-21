const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    './src/js/ClientApp.jsx'
  ],
  devtool: 'inline-source-map',
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
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
