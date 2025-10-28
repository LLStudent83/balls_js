import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@shadcn/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
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
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5 border border-border
				 rounded-xl w-1/3 space-y-5"
			>
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
			</form>
		</Form>
	);
}
