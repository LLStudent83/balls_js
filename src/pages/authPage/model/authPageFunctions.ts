import { z } from "zod";

export const formSchema = z
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

export type FormDataT = z.infer<typeof formSchema>;
