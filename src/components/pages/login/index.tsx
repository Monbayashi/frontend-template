import { LoginForm } from '@/components/pages/login/login-form';
import Image from 'next/image';

export const LoginPage = () => {
  return (
    <main className="flex min-h-full flex-col justify-center bg-gradient-to-r from-yellow-200 to-orange-300 px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/saint-care.svg"
          alt="saint-care"
          className="mx-auto"
          height={100}
          width={100}
          priority
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
          チャントシステム
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
      </div>
    </main>
  );
};
