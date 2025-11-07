import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		checker({
			// Включаем проверку TypeScript
			typescript: {
				tsconfigPath: "tsconfig.checker.json",
			},
			// Показываем ошибки в браузере через overlay
			overlay: true,
			// Логи в терминале
			terminal: true,
		}),
	],
	resolve: {
		alias: {
			app: path.resolve(__dirname, "./src/app"),
			pages: path.resolve(__dirname, "./src/pages"),
			widgets: path.resolve(__dirname, "./src/widgets"),
			features: path.resolve(__dirname, "./src/features"),
			entities: path.resolve(__dirname, "./src/entities"),
			shared: path.resolve(__dirname, "./src/shared"),
			"@shadcn": path.resolve(__dirname, "./src/shared/ui/shadcn"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:3000",
				changeOrigin: true,
			},
		},
	},
});
