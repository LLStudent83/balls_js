import { AuthPage } from "pages/authPage";
import { GamePage } from "pages/gamePage";
import { GameRules } from "pages/gameRules";
import { LoginPage } from "pages/loginPage";
import { createBrowserRouter } from "react-router";
import {
	authRoutes,
	gameRoutes,
	rulesRoutes,
} from "shared/constants/routes.config";
import { Layout } from "shared/ui/layout";
import { protectedMiddleware } from "./routesUtils";

export const router = createBrowserRouter([
	{
		path: authRoutes.withSlash.register,
		Component: AuthPage,
	},
	{
		path: authRoutes.withSlash.login,
		Component: LoginPage,
	},
	{
		path: "/",
		middleware: [protectedMiddleware],
		Component: Layout,
		children: [
			{ path: gameRoutes.game, Component: GamePage },
			{ path: rulesRoutes.rules, Component: GameRules },
		],
	},
]);
