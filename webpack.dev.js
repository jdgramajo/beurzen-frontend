const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "/v1/",
  },
  devServer: {
    publicPath: "/v1/",
    writeToDisk: true,
  },
});
