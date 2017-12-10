const path = require('path');

module.exports = {
  entry : './src/index.ts',
  output : {
    path : path.resolve(__dirname, './dist'),
    libraryTarget: 'umd',
    filename : '[name].js',
  },
  resolve : {
    extensions: ['.ts', '.js'],
  },
  module : {
    rules : [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: { /* Loader options go here */ }
      },
      {
        test : /\.js|ts$/,
        loader : 'awesome-typescript-loader',
      }, {
        test : /\.css$/,
        loader : 'style-loader!css-loader',
      },
    ],
  },
  devtool: false,
};
