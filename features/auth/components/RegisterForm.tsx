'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function RegisterForm() {
  const router = useRouter();
  const { register } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsSubmitting(true);
    try {
      await register({
        name: name.trim(),
        email: email.trim(),
        password,
      });

      // Smooth redirect to home
      router.push('/');
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[540px] rounded-[32px] bg-white p-7 shadow-2xl sm:rounded-[40px] sm:p-12 md:p-14">
      {/* Subtitle / Header tag */}
      <span className="text-sm font-semibold text-brand-blue sm:text-[15px]">
        Create an Account
      </span>

      {/* Main Title */}
      <h1 className="font-heading mt-2 mb-8 text-3xl font-bold tracking-tight text-[#040819] sm:text-4xl lg:text-[42px] leading-tight">
        Welcome to<br />ByteSpace
      </h1>

      {/* Error alert */}
      {error && (
        <div className="mb-6 rounded-2xl bg-rose-50 p-3.5 text-xs font-semibold text-rose-600 border border-rose-100">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="register-name"
            className="mb-2 block text-sm font-medium text-[#18181B]"
          >
            Full Name
          </label>
          <input
            id="register-name"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Jamie Davis"
            className="w-full rounded-2xl border border-gray-200/90 bg-white px-4 py-3.5 text-sm text-[#040819] placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="register-email"
            className="mb-2 block text-sm font-medium text-[#18181B]"
          >
            Email
          </label>
          <input
            id="register-email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="designer@example.com"
            className="w-full rounded-2xl border border-gray-200/90 bg-white px-4 py-3.5 text-sm text-[#040819] placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="register-password"
            className="mb-2 block text-sm font-medium text-[#18181B]"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="register-password"
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
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Submit Button (Aligned to the right like Figma) */}
        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lime px-9 py-3 text-sm font-bold text-[#040819] shadow-md transition-all duration-200 hover:brightness-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Creating...</span>
              </>
            ) : (
              'Continue'
            )}
          </button>
        </div>
      </form>

      {/* Footer Link */}
      <div className="mt-8 text-center sm:mt-10">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold text-brand-blue hover:underline transition-all"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
