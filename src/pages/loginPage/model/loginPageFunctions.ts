import { z } from "zod";

export const formSchema = z.object({
	nickName: z.string(),
	password: z.string(),
});

export type FormDataT = z.infer<typeof formSchema>;
