import { zodResolver } from '@hookform/resolvers/zod';
import { AuthFormItemTemplate } from '@shadcn/components/ui/AuthFormItemTemplate';
import { AuthFormTemplate } from '@shadcn/components/ui/AuthFormTemplate';
import { Button } from '@shadcn/components/ui/button';
import { FormField } from '@shadcn/components/ui/form';
import { useForm } from 'react-hook-form';
import type { RegisterDto } from 'shared/api';
import { type FormDataT, formSchema } from '../model/authPageFunctions';

interface PropsI {
  registerHandler: (userData: RegisterDto) => void;
}

export function AuthForm(props: PropsI) {
  const { registerHandler } = props;

  const form = useForm<FormDataT>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      nickName: '',
      password: '',
      confirmPassword: '',
    },
  });

  function clearForm() {
    form.reset({
      email: '',
      nickName: '',
      password: '',
      confirmPassword: '',
    });
  }

  function onSubmit(userRegisterData: FormDataT) {
    console.log(userRegisterData);
    const { email, password, nickName } = userRegisterData;

    const userData = {
      email: email,
      nickName: nickName,
      password: password,
    };

    registerHandler(userData);
  }

  return (
    <AuthFormTemplate {...form} onSubmit={onSubmit}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <AuthFormItemTemplate placeholder="Email опционально*" field={field} />
        )}
      />
      <FormField
        control={form.control}
        name="nickName"
        render={({ field }) => (
          <AuthFormItemTemplate placeholder="Имя пользователя латиницей" field={field} />
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <AuthFormItemTemplate placeholder="Пароль минимум 8 символов" field={field} />
        )}
      />

      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <AuthFormItemTemplate placeholder="Повторите пароль" field={field} />
        )}
      />
      <p className="text-muted-foreground text-[0.9rem]">
        * - нужен только для восстановления пароля. Без email при утере пароля потребуется заново
        зарегистрироваться
      </p>
      <div className="flex gap-2">
        <Button type="submit">Зарегистрироваться</Button>
        <Button type="button" variant="outline" onClick={clearForm}>
          Очистить
        </Button>
      </div>
    </AuthFormTemplate>
  );
}
