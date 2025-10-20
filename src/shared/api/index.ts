import type {
	useAuthControllerLogin,
	useAuthControllerRegister,
} from "./generated/auth/auth";
import ApiProvider from "./provider/ApiProvider";

export default ApiProvider;
export type { useAuthControllerLogin, useAuthControllerRegister };
