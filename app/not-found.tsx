import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: '404 — Page Not Found | ByteSpace',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[calc(100vh-80px)] w-full flex-col bg-brand-blue">
      <Navbar overlay />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="relative mx-auto w-full max-w-[480px] sm:max-w-[640px] lg:max-w-[780px]">
          <Image
            src="/images/404/404.png"
            alt="404"
            width={780}
            height={303}
            priority
            className="h-auto w-full select-none object-contain drop-shadow-sm"
          />
        </div>

        <div className="relative z-20 -mt-12 sm:-mt-20 lg:-mt-24">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[56px] leading-[1.15]">
            The page you are looking
            <br />
            for doesn’t exist
          </h1>

          <p className="mx-auto mt-4 max-w-md text-xs sm:text-sm md:text-base text-white/80 leading-relaxed sm:mt-5">
            Try to use a correct url or go back to homepage to start again
          </p>

          <div className="mt-6 sm:mt-8">
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center justify-center rounded-full bg-brand-lime px-8 py-3 text-xs font-bold text-[#040819] shadow-md transition-all duration-200 hover:brightness-105 active:scale-95 sm:px-9 sm:py-3.5 sm:text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
