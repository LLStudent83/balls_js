import type { ConfigAPI } from "@babel/core";

const ReactCompilerConfig = {
  target: "19",
};

function getBabelConfig(api: ConfigAPI) {
  api.cache.forever(); // Кэшировать результат навсегда
  return {
    presets: [
      ["@babel/preset-env", { targets: "defaults" }],
      "@babel/preset-react", // Для поддержки React
      "@babel/preset-typescript", // Для поддержки TypeScript
    ],
    plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
  };
}

export default getBabelConfig;
