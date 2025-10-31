import { AuthPage } from "pages/authPage";
import { GamePage } from "pages/gamePage";
import { LoginPage } from "pages/logjnPage";
import { createBrowserRouter } from "react-router";
import { Layout } from "shared/ui/layout";

export const router = createBrowserRouter([
	// {
	// 	path: "/",
	// 	Component: Layout,
	// 	children: [
	// 		{
	// 			// path: "game",
	// 			index: true,
	// 			Component: GamePage,
	// 		},
	// 		{
	// 			path: "game",
	// 			Component: GamePage,
	// 		},

	// 		{
	// 			path: "auth",
	// 			Component: AuthPage,
	// 		},
	// 	],
	// },
	{
		path: "game",
		Component: GamePage,
	},

	{
		path: "auth",
		Component: AuthPage,
	},
	{
		path: "login",
		Component: LoginPage,
	},
]);
