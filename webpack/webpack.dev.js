const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "./build"),
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
