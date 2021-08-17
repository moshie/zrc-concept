const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve('./dist'),
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve('./src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', '@babel/typescript', ['@babel/env', { modules: false }]],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve('./src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve('./dist'),
    watchContentBase: true,
  },
};
