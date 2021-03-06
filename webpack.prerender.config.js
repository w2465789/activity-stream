const path = require("path");
const webpackConfig = require("./webpack.system-addon.config");
const webpack = require("webpack");

const srcPath = "system-addon/content-src/activity-stream-prerender.jsx";

const banner = `
NOTE: This file is generated by webpack from ${srcPath}
using the buildmc:html npm task.
`;

module.exports = Object.assign({}, webpackConfig, {
  target: "node",
  devtool: "sourcemap",
  entry: path.join(__dirname, srcPath),
  output: {
    path: path.join(__dirname, "bin"),
    filename: "prerender.js",
    libraryTarget: "commonjs2"
  },
  externals: {
    "react": "commonjs react",
    "react-dom": "commonjs react-dom"
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
});
