const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = merge(webpackConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        exclude: /node_modules/,
      }),
    ],
  },
});
