const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[chunkhash].js'
  },
  devServer:{
    open:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname, 'public/index.html')
    })
  ]
};
