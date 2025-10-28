import { Form as ShadcnForm } from "@shadcn/components/ui/form";
import { cn } from "@shadcn/lib/utils";
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
		<div
			className={cn(
				"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5 border border-border rounded-xl w-1/3",
				className,
			)}
		>
			<ShadcnForm {...props}>
				<form onSubmit={props.handleSubmit(onSubmit)} className="space-y-5">
					{children}
				</form>
			</ShadcnForm>
		</div>
	);
}

export { AuthFormTemplate };
