const { merge } = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { DefinePlugin } = require("webpack");
const path = require("path");

// module.exports
let web = merge(webpackConfig, {
  mode: "production",
  output: {
    ...webpackConfig.output,
    // filename: "[name].[contenthash].bundle.js",
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        exclude: /node_modules/,
      }),
      new DefinePlugin({
        "process.env": {
          REACT_APP_API_SECRET_KEY: JSON.stringify(
            process.env.REACT_APP_API_SECRET_KEY
          ),
          REACT_APP_API_ACCESS_KEY: JSON.stringify(
            process.env.REACT_APP_API_ACCESS_KEY
          ),
        },
      }),
    ],
  },
});

console.log(web);
