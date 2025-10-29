import { Form as ShadcnForm } from "@shadcn/components/ui/form";
import type { ReactNode } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

interface PropsI<TFieldValues extends FieldValues = FieldValues>
	extends UseFormReturn<TFieldValues> {
	children: ReactNode;
	onSubmit: (data: TFieldValues) => void;
	className?: string;
}

function AuthFormTemplate<TFieldValues extends FieldValues = FieldValues>({
	children,
	onSubmit,
	className,
	...props
}: PropsI<TFieldValues>) {
	return (
		<ShadcnForm {...props}>
			<form
				onSubmit={props.handleSubmit(onSubmit)}
				className="space-y-7 fixed left-1/2 top-1/2
				 -translate-x-1/2 -translate-y-1/2 p-5 border border-border rounded-xl w-[90%] text-lg lg:w-1/3 sm:w-1/2"
			>
				{children}
			</form>
		</ShadcnForm>
	);
}

export { AuthFormTemplate };
