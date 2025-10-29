import type { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormControl, FormItem, FormMessage } from "./form";
import { Input } from "./input";

type FieldT = ControllerRenderProps<FieldValues, keyof FieldValues>;

interface PropsI {
	placeholder: string;
	field: FieldT;
}

export function AuthFormItemTemplate(props: PropsI) {
	const { placeholder, field } = props;

	return (
		<FormItem className="relative">
			<FormControl>
				<Input placeholder={placeholder} {...field} />
			</FormControl>

			<FormMessage className="absolute -bottom-6" />
		</FormItem>
	);
}
