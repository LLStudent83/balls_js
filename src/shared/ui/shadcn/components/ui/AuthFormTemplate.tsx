import { Form as ShadcnForm } from '@shadcn/components/ui/form';
import type { ReactNode } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';

interface PropsI<TFieldValues extends FieldValues = FieldValues>
  extends UseFormReturn<TFieldValues> {
  children: ReactNode;
  onSubmit: (data: TFieldValues) => void;
  className?: string;
}

function AuthFormTemplate<TFieldValues extends FieldValues = FieldValues>({
  children,
  onSubmit,
  ...props
}: PropsI<TFieldValues>) {
  return (
    <ShadcnForm {...props}>
      <form
        onSubmit={props.handleSubmit(onSubmit)}
        className="space-y-7 p-5 border border-border rounded-xl  text-lg "
      >
        {children}
      </form>
    </ShadcnForm>
  );
}

export { AuthFormTemplate };
