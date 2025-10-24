import type { Config } from "tailwindcss";

const config: Config = {
	//   darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{ts,jsx,tsx}", // Для React в src
		// "./components/**/*.{js,ts,jsx,tsx}", // Для shadcn компонентов
	],
	//   theme: {
	//     extend: {
	//       colors: {
	//         border: "hsl(var(--border))",
	//         input: "hsl(var(--input))",
	//         ring: "hsl(var(--ring))",
	//         background: "hsl(var(--background))",
	//         foreground: "hsl(var(--foreground))",
	//         primary: {
	//           DEFAULT: "hsl(var(--primary))",
	//           foreground: "hsl(var(--primary-foreground))",
	//         },
	//         // ... добавьте остальные цвета из https://ui.shadcn.com/docs/theming
	//       },
	//       borderRadius: {
	//         lg: "var(--radius)",
	//         md: "calc(var(--radius) - 2px)",
	//         sm: "calc(var(--radius) - 4px)",
	//       },
	//     },
	//   },
	plugins: [], // Добавьте [animate] после установки tailwindcss-animate
};

export default config;
