const path = require('path');

module.exports = {
  entry : './src/index.ts',
  output : {
    path : path.resolve(__dirname, './dist'),
    filename : '[name].js',
  },
  resolve : {
    extensions: ['.ts', '.js'],
  },
  module : {
    rules : [
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
