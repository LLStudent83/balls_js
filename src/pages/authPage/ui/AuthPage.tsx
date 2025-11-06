import { Button } from "@shadcn/components/ui/button";
import { useUserStore } from "entities/User";
import { useNavigate } from "react-router";
import { type RegisterDto, useAuthControllerRegister } from "shared/api";
import { authRoutes, gameRoutes } from "shared/constants/routes.config";
import { AuthForm } from "./AuthForm";

export function AuthPage() {
	const navigate = useNavigate();
	const setUser = useUserStore.use.setUser();

	const authHandler = (userData) => {
		const { id, nickName, email } = userData;
		setUser({ userId: id, nickName, email });

		navigate(gameRoutes.withSlash.game, { viewTransition: true });
	};

	const errorAuthHandler = (e) => {
		// нужно распарсить ошибку и показать соответствующее сообщение
		console.error("ошибка регистрации", e);
	};

	const register = useAuthControllerRegister({
		mutation: {
			onError: errorAuthHandler,
			onSuccess: authHandler,
		},
	});

	const registerHandler = (userData: RegisterDto) => {
		register.mutate({ data: userData });
	};

	const redirectToLoginPage = () => {
		navigate(authRoutes.withSlash.login, { viewTransition: true });
	};

	const redirectToLoginPageHandler = () => {
		redirectToLoginPage();
	};

	return (
		<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-1/3 sm:w-1/2 ">
			<div className="flex items-center justify-center gap-2 mb-3">
				<p>Если зарегистрированы </p>{" "}
				<Button onClick={redirectToLoginPageHandler}>Войдите</Button>
			</div>
			<AuthForm registerHandler={registerHandler} />
		</div>
	);
}
