import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormItemTemplate } from "@shadcn/components/ui/AuthFormItemTemplate";
import { AuthFormTemplate } from "@shadcn/components/ui/AuthFormTemplate";
import { Button } from "@shadcn/components/ui/button";
import { FormField } from "@shadcn/components/ui/form";
import { useForm } from "react-hook-form";
import type { LoginDto } from "shared/api";
import { type FormDataT, formSchema } from "../model/loginPageFunctions";

interface PropsI {
	loginHandler: (userData: LoginDto) => void;
}

export function LoginForm(props: PropsI) {
	const { loginHandler } = props;

	const form = useForm<FormDataT>({
		mode: "onBlur",
		reValidateMode: "onBlur",
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	function onSubmit(userRegisterData: FormDataT) {
		console.log(userRegisterData);
		const { password, username } = userRegisterData;

		const userData = {
			nickname: username,
			password: password,
		};

		loginHandler(userData);
	}

	return (
		<AuthFormTemplate {...form} onSubmit={onSubmit}>
			<FormField
				control={form.control}
				name="username"
				render={({ field }) => (
					<AuthFormItemTemplate placeholder="Имя пользователя" field={field} />
				)}
			/>
			<FormField
				control={form.control}
				name="password"
				render={({ field }) => (
					<AuthFormItemTemplate placeholder="Пароль" field={field} />
				)}
			/>

			<Button type="submit">Войти</Button>
		</AuthFormTemplate>
	);
}
