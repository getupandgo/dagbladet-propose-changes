const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react'] } },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'client'), 'node_modules']
  },
  devServer: {
    port: 9000,
    historyApiFallback: true
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
}
