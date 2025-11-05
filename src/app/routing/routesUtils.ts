import { useUserStore } from "entities/User";
import { redirect } from "react-router";
import { authControllerCheckStatus } from "shared/api/generated/auth/auth";
import { authRoutes, gameRoutes } from "shared/constants/routes.config";

export const protectedMiddleware = async () => {
	const userStore = useUserStore.getState();
	const userData = userStore.user;

	if (userData) {
		return;
	}

	let status = "not_registered";
	let user = null;

	try {
		const response = await authControllerCheckStatus();
		console.log("response", response);
		status = response.status;
		user = response.user || null;
	} catch (error) {
		console.error(error);
		throw redirect(authRoutes.withSlash.register);
	}

	switch (status) {
		case "authenticated": {
			const { id, nickName, email } = user;
			userStore.setUser({ userId: id, nickName, email });

			throw redirect(gameRoutes.game);
		}
		case "token_expired":
			throw redirect(authRoutes.withSlash.login);
		case "not_registered":
			throw redirect(authRoutes.withSlash.register);
		default:
			throw redirect(authRoutes.withSlash.register);
	}
};
