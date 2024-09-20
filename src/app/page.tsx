'use client';

import Button from '@/components/generics/button/button';
import Label from '@/components/generics/label/label';
import TextField from '@/components/generics/textField/textField';
import useAuth from '@/hooks/useAuth';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { _login, isLoadingLogin } = useAuth();
  const { register, watch, handleSubmit } = useForm();

  const email = watch('userEmail');
  const password = watch('userPassword');

  const handleLogin = () => {
    console.log(email, password);

    _login({ email, password });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col items-start gap-8 sm:w-96">
        <h1>Sign in</h1>
        <form
          className="flex w-full flex-col gap-4 rounded-lg bg-zinc-100 p-4"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="userEmail">E-mail</Label>
            <TextField
              type="email"
              placeholder="Email"
              register={register('userEmail')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="userPassword">Password</Label>
            <TextField
              type="password"
              placeholder="Password"
              register={register('userPassword')}
            />
          </div>
          <span className="text-sm tracking-tighter text-sky-500">forget your password?</span>
          <Button isLoading={isLoadingLogin}>Login</Button>
        </form>
      </div>
    </div>
  );
}
