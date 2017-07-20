var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var GitRevisionPlugin = require('git-revision-webpack-plugin');

var gitRevisionPluginOpt = {
  versionCommand: 'describe --always --tags',
  commithashCommand: 'rev-parse --short HEAD'
};
var gitRevisionPlugin = new GitRevisionPlugin(gitRevisionPluginOpt);

module.exports = {
  entry: {
    app: './src/app.tsx',
    vendors: ['react', 'react-dom', 'moment']
  },
  output: {
    filename: '[name].[git-revision-hash].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors' }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb|is/),
    gitRevisionPlugin,
    new HtmlWebpackPlugin({
      title: 'Fössari.is',
      template: path.resolve(__dirname, './src/index.ejs'),
      gitCommitHash: gitRevisionPlugin.commithash(),
      gitCommitVersion: gitRevisionPlugin.version()
    }),
    new CopyWebpackPlugin([
      { from: './src/img/', to: 'img/' }
    ]),
    new CleanWebpackPlugin(['dist'])
  ]
};
