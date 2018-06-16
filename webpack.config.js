const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: `${APP_DIR}/App.js`,
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundles/[name]/[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundles/[name]/[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
