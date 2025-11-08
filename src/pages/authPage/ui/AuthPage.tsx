import { Button } from "@shadcn/components/ui/button";
import { useUserStore } from "entities/User";
import { useNavigate } from "react-router";
import {
	type RegisterDto,
	type UserResponseDto,
	useAuthControllerRegister,
} from "shared/api";
import { routesAsConst } from "shared/config/routes";
import { hasUserSeenRules } from "shared/functions/LSUtils/rulesUtils";
import { AuthForm } from "./AuthForm";

const { authRoutes, gameRoutes, rulesRoutes } = routesAsConst;

export function AuthPage() {
	const navigate = useNavigate();
	const setUser = useUserStore.use.setUser();

	const successAuthHandler = (userData: UserResponseDto) => {
		const { id, nickName, email } = userData;
		setUser({ userId: id, nickName, email });

		if (hasUserSeenRules()) {
			navigate(gameRoutes.withSlash.game, { viewTransition: true });
		} else {
			navigate(rulesRoutes.withSlash.rules, { viewTransition: true });
		}
	};

	const errorAuthHandler = (e: any) => {
		// нужно распарсить ошибку и показать соответствующее сообщение
		console.error("ошибка регистрации", e);
	};

	const register = useAuthControllerRegister({
		mutation: {
			onError: errorAuthHandler,
			onSuccess: successAuthHandler,
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
