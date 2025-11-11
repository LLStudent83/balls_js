import { describe, expect, it } from "vitest";
import { type FormDataT, formSchema } from "../model/authPageFunctions";

describe("formSchema", () => {
	describe("Валидные данные", () => {
		it("должна пройти валидацию с корректными данными", () => {
			const validData: FormDataT = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(validData);
			expect(result.success).toBe(true);
		});

		it("должна пройти валидацию с пустым email", () => {
			const validData: FormDataT = {
				email: "",
				nickName: "testuser",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(validData);
			expect(result.success).toBe(true);
		});

		it("должна пройти валидацию с nickName из 2 символов", () => {
			const validData: FormDataT = {
				email: "user@example.com",
				nickName: "ab",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(validData);
			expect(result.success).toBe(true);
		});
	});

	describe("Валидация email", () => {
		it("должна вернуть ошибку для невалидного email", () => {
			const invalidData = {
				email: "invalid-email",
				nickName: "testuser",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);

			if (!result.success) {
				const emailError = result.error.issues.find(
					(issue) => issue.path[0] === "email",
				);
				expect(emailError).toBeDefined();
				expect(emailError?.message).toBe("Неверный Email");
			}
		});

		it("должна вернуть ошибку для email без @", () => {
			const invalidData = {
				email: "userexample.com",
				nickName: "testuser",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);
		});
	});

	describe("Валидация nickName", () => {
		it("должна вернуть ошибку для nickName меньше 2 символов", () => {
			const invalidData = {
				email: "user@example.com",
				nickName: "a",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);

			if (!result.success) {
				const nickNameError = result.error.issues.find(
					(issue) => issue.path[0] === "nickName",
				);
				expect(nickNameError).toBeDefined();
				expect(nickNameError?.message).toBe(
					"Имя пользователя должно быть не меньше 2-х символов",
				);
			}
		});

		it("должна вернуть ошибку для пустого nickName", () => {
			const invalidData = {
				email: "user@example.com",
				nickName: "",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);
		});
	});

	describe("Валидация password", () => {
		it("должна вернуть ошибку для пароля без строчных букв", () => {
			const invalidData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TESTPASS123!",
				confirmPassword: "TESTPASS123!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);

			if (!result.success) {
				const passwordError = result.error.issues.find(
					(issue) => issue.path[0] === "password",
				);
				expect(passwordError).toBeDefined();
				expect(passwordError?.message).toBe(
					"Минимум 8 символов, строчную, заглавную, букву и цифру и спецсимвол (@$!%*?&)",
				);
			}
		});

		it("должна вернуть ошибку для пароля без заглавных букв", () => {
			const invalidData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "testpass123!",
				confirmPassword: "testpass123!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);
		});

		it("должна вернуть ошибку для пароля без цифр", () => {
			const invalidData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass!",
				confirmPassword: "TestPass!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);
		});

		it("должна вернуть ошибку для пароля без спецсимволов", () => {
			const invalidData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass123",
				confirmPassword: "TestPass123",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);
		});

		it("должна вернуть ошибку для пароля короче 8 символов", () => {
			const invalidData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "Test1!",
				confirmPassword: "Test1!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);
		});

		it("должна пройти валидацию для password со всеми спецсимволами", () => {
			const validData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass1@",
				confirmPassword: "TestPass1@",
			};

			const result = formSchema.safeParse(validData);
			expect(result.success).toBe(true);
		});

		it("должна пройти валидацию для password с символом $", () => {
			const validData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass1$",
				confirmPassword: "TestPass1$",
			};

			const result = formSchema.safeParse(validData);
			expect(result.success).toBe(true);
		});

		it("должна пройти валидацию для password с символом !", () => {
			const validData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass1!",
				confirmPassword: "TestPass1!",
			};

			const result = formSchema.safeParse(validData);
			expect(result.success).toBe(true);
		});
	});

	describe("Валидация confirmPassword", () => {
		it("должна вернуть ошибку для несовпадающих паролей", () => {
			const invalidData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass123!",
				confirmPassword: "DifferentPass123!",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);

			if (!result.success) {
				const confirmPasswordError = result.error.issues.find(
					(issue) => issue.path[0] === "confirmPassword",
				);
				expect(confirmPasswordError).toBeDefined();
				expect(confirmPasswordError?.message).toBe("Пароли должны совпадать");
			}
		});

		it("должна пройти валидацию для совпадающих паролей", () => {
			const validData = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(validData);
			expect(result.success).toBe(true);
		});
	});

	describe("Комплексные тесты", () => {
		it("должна вернуть несколько ошибок одновременно", () => {
			const invalidData = {
				email: "invalid-email",
				nickName: "a",
				password: "weak",
				confirmPassword: "different",
			};

			const result = formSchema.safeParse(invalidData);
			expect(result.success).toBe(false);

			if (!result.success) {
				expect(result.error.issues.length).toBeGreaterThan(1);
			}
		});

		it("должна корректно типизировать данные при успешной валидации", () => {
			const validData: FormDataT = {
				email: "user@example.com",
				nickName: "testuser",
				password: "TestPass123!",
				confirmPassword: "TestPass123!",
			};

			const result = formSchema.safeParse(validData);
			expect(result.success).toBe(true);

			if (result.success) {
				expect(result.data).toEqual(validData);
				expect(typeof result.data.email).toBe("string");
				expect(typeof result.data.nickName).toBe("string");
				expect(typeof result.data.password).toBe("string");
				expect(typeof result.data.confirmPassword).toBe("string");
			}
		});
	});
});
