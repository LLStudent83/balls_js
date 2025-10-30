import { type RegisterDto, useAuthControllerRegister } from "shared/api";
import { AuthForm } from "./AuthForm";

export function AuthPage() {
	const register = useAuthControllerRegister();

	const registerHandler = (userData: RegisterDto) => {
		register.mutate({ data: userData });
	};

	return (
		<div>
			<AuthForm registerHandler={registerHandler} />
		</div>
	);
}
