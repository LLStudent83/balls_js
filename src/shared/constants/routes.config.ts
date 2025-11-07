type RoutesConfig<TRoutes extends Record<string, string>> = TRoutes & {
	get withSlash(): Record<keyof TRoutes, string>;
};

function createRoutes<const TRoutes extends Record<string, string>>(
	routes: TRoutes,
): RoutesConfig<TRoutes> {
	const routesStorage = routes;

	return {
		...routes,
		get withSlash() {
			return Object.fromEntries(
				Object.entries(routesStorage).map(([key, value]) => [key, `/${value}`]),
			) as Record<keyof TRoutes, string>;
		},
	};
}

export const authRoutes = createRoutes({
	register: "register",
	login: "login",
});

export const gameRoutes = createRoutes({
	game: "game",
});

export const rulesRoutes = createRoutes({
	rules: "rules",
});
