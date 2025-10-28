import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormTemplate } from "@shadcn/components/ui/AuthFormTemplate";
import { Button } from "@shadcn/components/ui/button";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@shadcn/components/ui/form";
import { Input } from "@shadcn/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
	.object({
		email: z.email("Неверный Email"),
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

export function AuthForm() {
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

	function onSubmit(values: FormDataT) {
		console.log(values);
	}

	return (
		<AuthFormTemplate {...form} onSubmit={onSubmit}>
			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input
								placeholder="Опционально Email для восстановления пароля"
								{...field}
							/>
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="username"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input placeholder="Имя пользователя латиницей" {...field} />
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="password"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input placeholder="Пароль минимум 8 символов" {...field} />
						</FormControl>

						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="confirmPassword"
				render={({ field }) => (
					<FormItem>
						<FormControl>
							<Input placeholder="Повторите пароль" {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<Button type="submit">Зарегистрироваться</Button>
		</AuthFormTemplate>
	);
}
