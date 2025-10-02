import { resolve } from "node:path";
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
				// Глобальный CSS (обычные .css файлы)
				{
					test: /\.css$/i,
					use: ["style-loader", "css-loader"],
				},
				// CSS Modules (файлы .module.css)
				{
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
				overlay: true,
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
