const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pug = {
  test: /\.pug$/,
  exclude: /node_modules/,
  loader: 'simple-pug-loader',
  options: {
    pretty: true // HIGH VULNERABILITY 
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
      template: 'src/views/index.pug',
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    })
  ],
  module: {
    rules: [pug, sass, tsc]
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      "@ts": path.resolve(__dirname, "./src/ts"),
      "@blocks": path.resolve(__dirname, "./src/views/blocks"),
      "@comps": path.resolve(__dirname, "./src/views/components"),

    },
  }
}

module.exports = config;
