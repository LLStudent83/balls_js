import { RouterProvider } from "react-router/dom";
import { router } from "./routes";

export function AppRoutes() {
	return <RouterProvider router={router} />;
}
