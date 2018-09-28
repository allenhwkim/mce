// webpack v4
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env, argv) => {
  console.log('mode', argv.mode);

  const config = {
    entry: { 
      mce: './src/index.js',
      style: './src/index.scss' 
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
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
          test: /\.scss$/,
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
      new MiniCssExtractPlugin({
         filename: 'mce'+ (argv.mode === 'development' ? '':'.min')+'.css'
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

  if (argv.mode === 'production') {
    config.devtool = 'source-map';
    config.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    };
    config.output.filename = '[name].min.js';
  }

  return config;
};
