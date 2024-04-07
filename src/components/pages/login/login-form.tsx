'use client';

import { FormInputWrapper } from '@/components/ui-parts/form-input-wrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('有効なメールアドレスを入力してください。'),
  password: z.string().min(4, 'パスワードは４桁以上の文字を入力してください。'),
});

type Schema = z.infer<typeof schema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema) });

  // const { data, error, isLoading } = useQuery('login', async (data) => {
  //    const response = await axios.post("/api/login", { email, password });
  //    return response.data;
  // });

  const onSubmit = handleSubmit((data) => {
    try {
      console.log('LoginForm onSubmit:', data);
      // ログイン成功後の処理
    } catch (error) {
      // エラー処理
      console.error(error);
    }
  });

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <FormInputWrapper
        key="login-form_email"
        htmlFor="email"
        labelText="Email アドレス"
        errorMsg={errors.email?.message?.toString()}
      >
        <input
          id="email"
          autoComplete="email"
          type="text"
          {...register('email')}
          className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </FormInputWrapper>

      <FormInputWrapper
        key="login-form_password"
        htmlFor="password"
        labelText="パスワード"
        errorMsg={errors.password?.message?.toString()}
      >
        <input
          id="password"
          autoComplete="current-password"
          type="password"
          {...register('password')}
          className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </FormInputWrapper>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 p-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          ログイン
        </button>
      </div>
    </form>
  );
};
