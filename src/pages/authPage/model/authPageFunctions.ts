import { z } from "zod";

const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const formSchema = z
	.object({
		email: z.union([z.literal(""), z.email("Неверный Email")]),
		nickName: z.string().min(2, {
			message: "Имя пользователя должно быть не меньше 2-х символов",
		}),
		password: z.string().regex(passwordRegex, {
			message:
				"Минимум 8 символов, строчную, заглавную, букву и цифру и спецсимвол (@$!%*?&)",
		}),

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
