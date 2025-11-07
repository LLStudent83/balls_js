import type { Config } from "orval";

const config: Config = {
	bouncingBallsApi: {
		input: {
			target: "http://localhost:3000/api-json",
		},
		output: {
			mode: "tags-split", // По тегам (Auth в auth/)
			target: "./src/shared/api/generated", // В shared/api/generated
			client: "react-query", // Хуки TanStack Query
			mock: false,
			prettier: false,
			override: {
				mutator: {
					path: "./src/shared/api/custom-instance.ts",
					name: "customInstance",
				},
			},
		},
	},
};

export default config;
