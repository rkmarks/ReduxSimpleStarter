const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.HotModuleReplacementPlugin() 
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ["es2015", "es2016"]
          ] 
        }
      }
    }]
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: './'
  }
};
