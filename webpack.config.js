import { resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

// Вычисляем __filename и __dirname для ES-модулей
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

const build = (env) => {
  const { mode } = env;
  console.log("!!!!!!", mode);

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
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};

export default build;
