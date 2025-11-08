import { useUserStore } from "entities/User";
import { useNavigate } from "react-router";
import {
	type LoginDto,
	type UserResponseDto,
	useAuthControllerLogin,
} from "shared/api";
import { routesAsConst } from "shared/config/routes";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
	const register = useAuthControllerLogin();
	const setUser = useUserStore((state) => state.setUser);
	const navigate = useNavigate();

	const successLoginHandler = (userData: UserResponseDto) => {
		const { id, nickName, email } = userData;
		setUser({ userId: id, nickName, email });

		navigate(routesAsConst.gameRoutes.withSlash.game, { viewTransition: true });
	};

	const errorLoginHandler = (error: any) => {
		console.error("Ошибка входа:", error);
	};

	const loginHandler = (userData: LoginDto) => {
		register.mutate(
			{ data: userData },
			{
				onSuccess: successLoginHandler,
				onError: errorLoginHandler,
			},
		);
	};

	return (
		<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-1/3 sm:w-1/2 ">
			<LoginForm loginHandler={loginHandler} />
		</div>
	);
}
