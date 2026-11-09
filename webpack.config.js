import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === "production";

/** @type {import("webpack").Configuration} */
const config = {
  entry: "./src/index.html",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: {
      html: {
        collapseWhitespace: "smart",
        removeRedundantAttributes: "smart",
        sortAttributes: true,
        sortTokenLists: true,
        mergeStyles: true,
      },
    },
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};

export default () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
