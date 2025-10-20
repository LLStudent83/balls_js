import { resolve } from "node:path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

interface Env {
	mode: "development" | "production";
}

const build = (env: Env): Configuration & DevServerConfiguration => {
	const { mode } = env;

	return {
		mode: mode,
		devtool: mode === "development" ? "eval-source-map" : false,
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
							sourceMaps: true,
						},
					},
				},
				{
					test: /\.scss$/i,
					exclude: /\.module\.scss$/i,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
{
            test: /\.css$/i,
            exclude: /\.module\.css$/i, // Исключаем модульные, чтобы не конфликтовать (если они появятся позже)
            use: ["style-loader", "css-loader"],
        },				{
					test: /\.module\.scss$/i,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								modules: {
									namedExport: false,
									localIdentName:
										mode === "development"
											? "[local]--[hash:base64:5]"
											: "[hash:base64:8]",
								},
							},
						},
						{
							loader: "sass-loader",
							options: {
								sourceMap: true,
							},
						},
					],
				},
			],
		},

		resolve: {
			extensions: [".tsx", ".ts", ".js"],
			preferRelative: true,
			plugins: [new TsconfigPathsPlugin()],
		},

		devServer: {
			port: 8080,
			open: true,
			hot: true,
			liveReload: false,
			client: {
				overlay: {
					errors: true,
					warnings: true,
				},
			},
			proxy: [
				{
					context: "/api",
					target: "http://localhost:3000", // Бэк на 3000
					changeOrigin: true,
					secure: false,
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html",
			}),
			new ForkTsCheckerWebpackPlugin({
				async: true,
				typescript: {
					configFile: resolve(__dirname, "tsconfig.json"), // Ссылка на ваш tsconfig для правильной проверки
					// diagnosticOptions: { semantic: true, syntactic: true }, // Опционально: для детального вывода (по умолчанию включено)
				},
			}),
		],
	};
};

module.exports = build;
