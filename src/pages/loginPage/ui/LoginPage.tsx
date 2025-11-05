import { type LoginDto, useAuthControllerLogin } from "shared/api";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
	const register = useAuthControllerLogin();

	const loginHandler = (userData: LoginDto) => {
		register.mutate({ data: userData });
	};

	return (
		<div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-1/3 sm:w-1/2 ">
			<LoginForm loginHandler={loginHandler} />
		</div>
	);
}
