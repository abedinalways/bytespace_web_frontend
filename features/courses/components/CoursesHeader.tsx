'use client';

import React from 'react';
import { CoursesSearchBar } from './CoursesSearchBar';

interface CoursesHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType?: string;
  onTypeChange?: (type: string) => void;
}

export function CoursesHeader({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
}: CoursesHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue px-4 pt-32 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 text-white">
      {/* Background Subtle Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Header Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 sm:mb-8 font-heading">
          Find Your Next Course
        </h1>

        <CoursesSearchBar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          selectedType={selectedType}
          onTypeChange={onTypeChange}
        />
      </div>
    </section>
  );
}
