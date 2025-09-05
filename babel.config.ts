import type { ConfigAPI } from "@babel/core";

const ReactCompilerConfig = {
  target: "19",
};

function getBabelConfig(api: ConfigAPI) {
  api.cache.forever(); // Кэшировать результат навсегда
  return {
    presets: [
      ["@babel/preset-env", { targets: "defaults" }],
      [
        "@babel/preset-react",
        {
          runtime: "automatic", // Добавлено: поддержка нового JSX Transform
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
  };
}

export default getBabelConfig;
