/**
 * Base webpack config used across other specific configs
 */

const path = require('path');
const {
  dependencies: externals
} = require('./app/package.json');

module.exports = {
  module: {
    rules: [{
      test: /\.tsx?$/,
      loaders: ['ts-loader'],
      exclude: /node_modules/
    }, {
      test: /\.(scss|sass)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },

  // https://webpack.js.org/configuration/resolve/
  resolve: {
    modules: [
      path.resolve(__dirname)
    ],
    alias: {
      components: 'app/components',
      containers: 'app/containers',
      reducers: 'app/reducers',
      utils: 'app/utils',
      actions: 'app/actions'
    },
    extensions: ['', '.js', '.ts', '.tsx', '.json'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },

  plugins: [],

  externals: Object.keys(externals || {})
};