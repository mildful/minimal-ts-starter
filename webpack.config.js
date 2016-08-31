const helpers = require('./helpers');

module.exports = {

  entry: {
    'src': './src/main.ts'
  },
  
  resolve: {
    extensions: ['', '.ts']
  },
  
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      }
    ]
  },
    
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  }
  
}