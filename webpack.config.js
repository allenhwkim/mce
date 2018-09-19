// webpack v4
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.WEBPACK_MODE || process.env.NODE_ENV || 'development';
console.log('env', env);

module.exports = {
  entry: { 
    mce: './src/index.js',
    style: './src/index.scss' 
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.[s]?css$/,
        use:  [ 
          'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [ 
    (env !== 'development' ?  new CleanWebpackPlugin('dist', {}) : new webpack.DefinePlugin({})),
    new MiniCssExtractPlugin({
       filename: 'mce.min.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: 'demo/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new CopyWebpackPlugin([
        {from: 'src/themes/*', to: 'themes', flatten: true },
        {from: 'demo', to: ''}
      ], {ignore: []})
  ]
};
