import {
	useAuthControllerCheckStatus,
	useAuthControllerLogin,
	useAuthControllerRegister,
} from "./generated/auth/auth";
import type {
	LoginDto,
	RegisterDto,
} from "./generated/bouncingBallsAPI.schemas";
import ApiProvider from "./provider/ApiProvider";

export default ApiProvider;
export {
	useAuthControllerLogin,
	useAuthControllerRegister,
	useAuthControllerCheckStatus,
};
export type { LoginDto, RegisterDto };
