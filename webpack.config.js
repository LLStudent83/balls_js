const { resolve } = require("path");
const { fileURLToPath } = require("url");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const build = (env) => {
  const { mode } = env;

  return {
    entry: "./src/index.js",

    mode: mode,

    output: {
      filename: "main.js",
      path: resolve(__dirname, "dist"),
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },

    devServer: {
      port: 8080,
      open: true,
      hot: true,
      // watchFiles: ["src/**/*"], // Отслеживание изменений в файлах
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
