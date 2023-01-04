const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackRTLPlugin = require('webpack-rtl-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

module.exports = {
  mode: 'development',
  entry: {
    theme: './src/assets/scss/theme.scss',
    user: './src/assets/scss/user.scss'
  },
  output: {
    path: path.resolve(__dirname, 'public/css')
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    }),
    new WebpackRTLPlugin({
      filename: '[name]-rtl.min.css',
      minify: true
    }),
    new CleanWebpackPlugin()
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: true
            }
          },
          // {
          //   loader: "css-loader",
          //   options: {
          //     url: false,
          //   },
          // },
          // "sass-loader",
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
