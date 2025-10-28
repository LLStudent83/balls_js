import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	plugins: [], // Добавьте [animate] после установки tailwindcss-animate
};

export default config;
