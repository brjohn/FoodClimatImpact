// webpack.config.js
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};