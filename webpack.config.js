const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/js/ClientApp.jsx'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /(\.css$)/,
<<<<<<< HEAD
        loaders: ['style-loader', 'css-loader']
=======
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
>>>>>>> 23ba3a84cd508ef4ec209f729e5a1b4302ae0588
      }
    ]
  }
};
