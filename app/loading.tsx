import React from 'react';
import LogoIcon from '@/components/icons/AllIcons';

export default function Loading() {
  return (
    <div className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-background px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40 dark:opacity-20"
      >
        <div className="size-[280px] rounded-full bg-brand-blue/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex size-20 items-center justify-center sm:size-24">
          <div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-brand-blue border-r-brand-blue/30 [animation-duration:1.1s]" />

          <div className="absolute inset-1.5 animate-spin rounded-full border-2 border-transparent border-b-brand-lime border-l-brand-lime/40 [animation-direction:reverse] [animation-duration:1.6s]" />

          <div className="relative flex size-11 items-center justify-center rounded-2xl bg-white shadow-md shadow-brand-blue/10 dark:bg-card sm:size-13">
            <LogoIcon className="size-6 animate-pulse text-brand-lime sm:size-7" />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center text-center">
          <span className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">
            ByteSpace
          </span>
          <span className="mt-1 text-xs font-medium text-brand-gray sm:text-sm">
            Loading...
          </span>

          <div className="relative mt-4 h-1 w-32 overflow-hidden rounded-full bg-gray-200/80 dark:bg-muted sm:w-40">
            <div className="animate-indeterminate-bar absolute inset-y-0 w-1/2 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(0,59,226,0.6)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
