const path = require('path');

let rulesForJS = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

let rulesForStyles = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader']
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      rulesForJS,
      rulesForStyles
    ]
  },
  mode: 'development'
};