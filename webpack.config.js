var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    app: './app.js',
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader : 'file',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};
