import { type LoginDto, useAuthControllerLogin } from "shared/api";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
	const register = useAuthControllerLogin();

	const loginHandler = (userData: LoginDto) => {
		register.mutate({ data: userData });
	};

	return (
		<div>
			<LoginForm loginHandler={loginHandler} />
		</div>
	);
}
