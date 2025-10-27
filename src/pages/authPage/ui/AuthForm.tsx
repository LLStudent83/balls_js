import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Имя пользователя должно быть не меньше 2-х символов",
	}),
    password: z
      .string()
      .min(7, { message: "Пароль должен быть не меньше 7 символов" })
      .regex(/[a-z]/, {
        message: "Пароль должен содержать хотя бы одну строчную букву",
      })
      .regex(/[A-Z]/, {
        message: "Пароль должен содержать хотя бы одну заглавную букву",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Пароль должен содержать хотя бы один специальный символ",
      }),
        repeatPassword: z.string().min(7, {
		message: "Имя пользователя должно быть не меньше 7-х символов",
	}),

});

export function AuthForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
            password: "",
repeatPassword: ''
		},
			
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Регистрация пользователя</FormLabel>
							<FormControl>
								<Input placeholder="Имя пользователя" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Регистрация пользователя</FormLabel>
							<FormControl>
								<Input placeholder="Пароль" {...field} />
							</FormControl>
							<FormDescription>
								Введите пароль.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

                <FormField
					control={form.control}
					name="repeatPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Регистрация пользователя</FormLabel>
							<FormControl>
								<Input placeholder="Повторите пароль" {...field} />
							</FormControl>
							<FormDescription>
								Повторите пароль.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Зарегистрироваться</Button>
			</form>
		</Form>
		
	);
}
