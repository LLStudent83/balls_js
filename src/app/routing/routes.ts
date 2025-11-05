import { AuthPage } from "pages/authPage";
import { GamePage } from "pages/gamePage";
import { LoginPage } from "pages/loginPage";
import { createBrowserRouter } from "react-router";
import { authRoutes, gameRoutes } from "shared/constants/routes.config";
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
		children: [{ path: gameRoutes.game, Component: GamePage }],
	},
]);
