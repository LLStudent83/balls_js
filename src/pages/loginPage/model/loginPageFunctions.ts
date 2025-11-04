import { z } from "zod";

export const formSchema = z.object({
	username: z.string(),
	password: z.string(),
});

export type FormDataT = z.infer<typeof formSchema>;
