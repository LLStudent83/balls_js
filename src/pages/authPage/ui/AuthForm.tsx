import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormItemTemplate } from "@shadcn/components/ui/AuthFormItemTemplate";
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
		email: z.union([z.literal(""), z.string().email("Неверный Email")]),
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
