const commonConfig = require('./common.webpack.js');
const { mergeWithRules } = require('webpack-merge');

module.exports = mergeWithRules()(commonConfig, {
  entry: './src/index.ts',
  output: {
    library: {
      name: 'components',
      type: 'umd',
    },
    filename: 'zopa-react-components.js',
  },
});
