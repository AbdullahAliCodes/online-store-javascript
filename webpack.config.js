import { watch } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  watch: true,
};
