// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { mce: './src/index.js' },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[chunkhash].js'
    filename: '[name].min.js'
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
          // 'postcss-loader',
          // 'sass-loader'
        ]
      }
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin('dist', {} ),
    new MiniCssExtractPlugin({
      // filename: 'mce.[contenthash].css'
       filename: 'mce.min.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: 'app/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new CopyWebpackPlugin([
        {from: 'src/themes/*', to: 'themes', flatten: true },
        {from: 'app', to: ''}
      ], {ignore: []})
  ]
};
