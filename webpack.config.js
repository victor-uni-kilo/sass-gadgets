const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pug = {
  test: /\.pug$/,
  exclude: /node_modules/,
  loader: 'simple-pug-loader', // ['file-loader?name=pages/[name].html', 'pug-html-loader?pretty&exports=false']
  options: {
    pretty: true
  }
}

const sass = {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    "css-loader",
    "sass-loader",
  ],
}

const tsc = {
  test: /\.ts$/,
  exclude: /node_modules/,
  loader: 'ts-loader',
}

// config

const config = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'pages/index.html',
      template: 'src/views/pages/index.pug',
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    })
  ],
  module: {
    rules: [pug, sass, tsc]
  },
}

module.exports = config;
