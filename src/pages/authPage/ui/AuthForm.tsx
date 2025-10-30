import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormItemTemplate } from "@shadcn/components/ui/AuthFormItemTemplate";
import { AuthFormTemplate } from "@shadcn/components/ui/AuthFormTemplate";
import { Button } from "@shadcn/components/ui/button";
import { FormField } from "@shadcn/components/ui/form";
import { useForm } from "react-hook-form";
import type { RegisterDto } from "shared/api";
import { z } from "zod";

const formSchema = z
	.object({
		email: z.union([z.literal(""), z.email("Неверный Email")]),
		username: z.string().min(2, {
			message: "Имя пользователя должно быть не меньше 2-х символов",
		}),
		password: z
			.string()
			.min(8, { message: "Пароль должен быть не меньше 8 символов" }),

		confirmPassword: z.string(),
	})
	.superRefine((data, ctx) => {
		if (data.confirmPassword !== data.password) {
			ctx.addIssue({
				code: "custom",
				message: "Пароли должны совпадать",
				path: ["confirmPassword"],
			});
		}
	});

type FormDataT = z.infer<typeof formSchema>;

interface PropsI {
	registerHandler: (userData: RegisterDto) => void;
}

export function AuthForm(props: PropsI) {
	const { registerHandler } = props;

	const form = useForm<FormDataT>({
		mode: "onBlur",
		reValidateMode: "onBlur",
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			username: "",
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(userRegisterData: FormDataT) {
		console.log(userRegisterData);
		const { email, password, username } = userRegisterData;

		const userData = {
			email: email,
			nickname: username,
			password: password,
		};

		registerHandler(userData);
	}

	return (
		<AuthFormTemplate {...form} onSubmit={onSubmit}>
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<AuthFormItemTemplate
						placeholder="Email опционально*"
						field={field}
					/>
				)}
			/>
			<FormField
				control={form.control}
				name="username"
				render={({ field }) => (
					<AuthFormItemTemplate
						placeholder="Имя пользователя латиницей"
						field={field}
					/>
				)}
			/>
			<FormField
				control={form.control}
				name="password"
				render={({ field }) => (
					<AuthFormItemTemplate
						placeholder="Пароль минимум 8 символов"
						field={field}
					/>
				)}
			/>

			<FormField
				control={form.control}
				name="confirmPassword"
				render={({ field }) => (
					<AuthFormItemTemplate placeholder="Повторите пароль" field={field} />
				)}
			/>
			<p className="text-muted-foreground text-[0.9rem]">
				* - нужен только для восстановления пароля. Без email при утере пароля
				потребуется заново зарегистрироваться
			</p>
			<Button type="submit">Зарегистрироваться</Button>
		</AuthFormTemplate>
	);
}
