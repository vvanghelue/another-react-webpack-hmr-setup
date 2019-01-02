const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require("webpack")

module.exports = {
  mode: "development",
  entry: {
    app: ["./src/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    host: "0.0.0.0",
    contentBase: path.join(__dirname, "."),
    port: 8182,
    // historyApiFallback: {
    //   disableDotRule: true
    // },
    overlay: true,
    hot: true
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Intranet",
      hash: true,
      template: "index.html"
    }),
    // new MiniCssExtractPlugin({
    //   filename: "build.css",
    //   chunkFilename: "[id].css"
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: ""
      //       }
      //     },
      //     {
      //       loader: "css-loader",
      //       options: { sourceMap: true }
      //     }
      //   ]
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "> 3%, not dead" }], "@babel/preset-react"]
          }
        }
      },
      // {
      //   test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {}
      //     }
      //   ]
      // }
    ]
  }
}
