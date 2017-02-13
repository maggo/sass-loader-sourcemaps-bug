const webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  entry: './index.scss',
  output: { filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            },
          ]
        }),
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextWebpackPlugin('styles.css'),
  ],
  devtool: 'inline-source-map'
};

module.exports = webpackConfig;
