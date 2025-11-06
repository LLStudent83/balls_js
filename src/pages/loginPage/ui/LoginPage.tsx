import { useUserStore } from "entities/User";
import { useNavigate } from "react-router";
import { type LoginDto, useAuthControllerLogin } from "shared/api";
import { gameRoutes } from "shared/constants/routes.config";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
	const register = useAuthControllerLogin();
	const setUser = useUserStore((state) => state.setUser);
	const navigate = useNavigate();

	const authHandler = (userData) => {
		const { id, nickName, email } = userData;
		setUser({ userId: id, nickName, email });

		navigate(gameRoutes.withSlash.game, { viewTransition: true });
	};

	const onLoginError = (error: any) => {
		console.error("Ошибка входа:", error);
	};

	const loginHandler = (userData: LoginDto) => {
		register.mutate(
			{ data: userData },
			{
				onSuccess: authHandler,
				onError: onLoginError,
			},
		);
	};

	return (
		<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-1/3 sm:w-1/2 ">
			<LoginForm loginHandler={loginHandler} />
		</div>
	);
}
