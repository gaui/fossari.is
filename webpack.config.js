var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    app: './app.tsx',
    vendor: ['react', 'react-dom', 'moment']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ },
      { test: /\.(png|jpg|woff|woff2|ttf|eot|svg)(\?]?.*)?$/, loader : 'file', exclude: /node_modules/ }
    ],
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};
