const { merge } = require('webpack-merge');
const commonConfig = require('./common.webpack.js');

module.exports = merge(commonConfig, {
  entry: './src/app/main.tsx',
  output: {
    filename: 'app.js',
  },
});
