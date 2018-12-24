const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: ["./client/src/main.js"],
    ts: ["./client/src/index.ts"]
  },
  mode: "development",
  output:{
    filename: "[name]-boundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  devtool: "source-map",
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[{ loader: "babel-loader"}]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use:[{ loader: "awesome-typescript-loader"}]
      },
      {
        test: /\.css$/,
        use:[
          {loader: "style-loader"},
          {
          loader: "css-loader",
          query: {
            modules: true
          }

          }
        ]
      },
      {
        test: /\.sass$/,
        use:[
          {loader: "style-loader"},
          {loader: "css-loader",
            query: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
              //[path] --from  root leading to file
              //[name] - file name
              //[local] - the class name
              //or
              //localIdentName: '[path][name]__[local]--[hash:base64:5]' (BEM)
            }
           },
          {loader:"postcss-loader"},
          {loader:"sass-loader"}
        ]
      },
      {
        test: /\.html$/,
        use:[
          {
            loader: "html-loader",
            options:{
               attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use:[{
          loader: "file-loader",
          options: {
            name: "images/[name]-[hash:8].[ext]"
          }
        }]
      }
    ]
  },
  plugins:[new webpack.HotModuleReplacementPlugin(),
  new HTMLWebpackPlugin({template: "./client/src/index.html"})]
}
