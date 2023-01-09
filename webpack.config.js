const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const yaml = require("yamljs");
const toml = require("toml");
const json5 = require("json5");
const webpack = require("webpack");
const DotEnv = require("dotenv-webpack");

const cssRegExp = /\.css$/i;
const imageRegExp = /\.(png|svg|gif|jpe?g)$/i;
const jsExtensions = ["*", ".js", ".jsx"];

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
    publicPath: "/",
  },

  resolve: {
    extensions: jsExtensions,
  },

  module: {
    rules: [
      {
        test: cssRegExp,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: imageRegExp,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules|bower_components)/i,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new MiniCssExtractPlugin(),
    new DotEnv(),
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true,
    splitChunks: {
      chunks: "all", // merge common deps into an entry chunk
    },
  },
};
