import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";

interface Env {
  mode: "development" | "production";
}

const build = (env: Env): Configuration & DevServerConfiguration => {
  const { mode } = env;

  return {
    mode: mode,

    entry: "./src/index.tsx",
    output: {
      filename: "main.js",
      path: resolve(__dirname, "dist"),
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    devServer: {
      port: 8080,
      open: true,
      hot: true,
      liveReload: false,
      client: {
        overlay: true, // Показ ошибок в браузере
      },
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};

module.exports = build;
