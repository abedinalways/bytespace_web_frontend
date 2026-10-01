import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { AuthVisualHero } from '@/features/auth/components/AuthVisualHero';

export const metadata: Metadata = {
  title: 'Sign Up — ByteSpace',
  description: 'Create an account and start learning with ByteSpace courses',
};

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-brand-blue px-4 py-6 sm:px-8 sm:py-8 lg:px-12">
      {/* Blueprint Grid Background Pattern matching Hero & Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      {/* Top Header with ByteSpace Brand Logo */}
      <header className="relative z-20 mx-auto w-full max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95"
          aria-label="ByteSpace Home"
        >
          <div className="relative size-8">
            <Image
              src="/images/auth/logo.svg"
              alt="ByteSpace"
              width={32}
              height={32}
              priority
              className="size-full object-contain"
            />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
            ByteSpace
          </span>
        </Link>
      </header>

      {/* Main Content: Split Two-Column Grid */}
      <div className="relative z-10 mx-auto my-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 py-8 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Heading, Subtitle & 3D Cards Composition */}
        <div className="flex flex-col lg:col-span-6 xl:col-span-6">
          <div className="mb-4 max-w-xl text-center lg:mb-6 lg:text-left">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Sign up and come in
            </h2>
            <p className="mt-3 text-sm text-white/80 sm:text-base leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient,
              allowing users to sign up quickly, easily, and at no cost
            </p>
          </div>

          {/* 3D Visual Cards with Floating Animated Cones */}
          <div className="mt-2 flex justify-center lg:justify-start">
            <AuthVisualHero />
          </div>
        </div>

        {/* Right Column: White Registration Card */}
        <div className="flex justify-center lg:col-span-6 xl:col-span-6 lg:justify-end">
          <RegisterForm />
        </div>
      </div>

      {/* Bottom spacer for balance */}
      <footer className="relative z-10 py-2 text-center text-xs text-white/40">
        © {new Date().getFullYear()} ByteSpace Inc. All rights reserved.
      </footer>
    </main>
  );
}
