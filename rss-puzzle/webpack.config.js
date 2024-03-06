const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const commonConfig = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [],
};

const productionConfig = {
  ...commonConfig,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};

const developmentConfig = {
  ...commonConfig,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return productionConfig;
  } else {
    return developmentConfig;
  }
};