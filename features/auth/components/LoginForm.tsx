'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setError('Please enter your password');
      return;
    }

    setIsSubmitting(true);
    try {
      await login({
        email: email.trim(),
        password,
      });

      router.push('/');
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid credentials. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[540px] rounded-[32px] bg-white p-7 shadow-2xl sm:rounded-[40px] sm:p-12 md:p-14">
      <span className="text-sm font-semibold text-brand-blue sm:text-[15px]">
        Sign In
      </span>

      <h1 className="font-heading mt-2 mb-8 text-3xl font-bold tracking-tight text-[#040819] sm:text-4xl lg:text-[42px] leading-tight">
        Welcome Back
      </h1>

      {error && (
        <div className="mb-6 rounded-2xl border border-rose-100 bg-rose-50 p-3.5 text-xs font-semibold text-rose-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="login-email"
            className="mb-2 block text-sm font-medium text-[#18181B]"
          >
            Email
          </label>
          <input
            id="login-email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="designer@example.com"
            className="w-full rounded-2xl border border-gray-200/90 bg-white px-4 py-3.5 text-sm text-[#040819] placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
          />
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="mb-2 block text-sm font-medium text-[#18181B]"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-2xl border border-gray-200/90 bg-white px-4 py-3.5 pr-11 text-sm text-[#040819] placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 transition-colors hover:text-gray-600"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-lime px-9 py-3 text-sm font-bold text-[#040819] shadow-md transition-all duration-200 hover:brightness-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Signing in...</span>
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </div>
      </form>

      <div className="relative my-8 flex items-center justify-center sm:my-10">
        <div className="w-full border-t border-gray-200/80" />
        <span className="absolute bg-white px-3 text-xs text-gray-400">or</span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="flex size-14 cursor-pointer items-center justify-center rounded-2xl border border-gray-200 bg-white transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95"
        >
          <svg className="size-6 text-[#040819]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Sign in with Google"
          className="flex size-14 cursor-pointer items-center justify-center rounded-2xl border border-gray-200 bg-white transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-95"
        >
          <svg className="size-6 text-[#040819]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
        </button>
      </div>

      <div className="mt-8 text-center sm:mt-10">
        <p className="text-sm text-gray-500">
          New user?{' '}
          <Link
            href="/register"
            className="font-medium text-brand-blue transition-all hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
