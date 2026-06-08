import { watch } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: {
    home: "./src/pages/home/home.js",
    shop: "./src/pages/shop/shop.js",
  },
  output: {
    // [name] -> dynamically chooses home, shop, etc.. from entry object above
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist", // Tell the server where to look
    port: 8080,
    hot: true, // Enable hot module replacement (auto-reload)
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/home/index.html",
      filename: "index.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/shop/shop.html",
      filename: "shop.html",
      chunks: ["shop"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
