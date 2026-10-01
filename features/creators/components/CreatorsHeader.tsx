'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface CreatorsHeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

const creatorCategories = [
  'All Creators',
  'UI/UX Design',
  'Product Design',
  'Data Science',
  'Marketing',
  'Digital Illustration',
  'Finance',
];

export function CreatorsHeader({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: CreatorsHeaderProps) {
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

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 font-heading">
          Meet Our Creators
        </h1>
        <p className="mx-auto max-w-2xl text-xs sm:text-sm text-white/85 mb-7 sm:mb-8 leading-relaxed">
          Discover passionate instructors, designers, and industry leaders sharing world-class knowledge on ByteSpace.
        </p>

        {/* Search Bar */}
        <div className="relative flex items-center h-11 sm:h-12 max-w-md mx-auto rounded-full bg-white px-5 shadow-xs transition-shadow focus-within:ring-2 focus-within:ring-white/40 mb-6">
          <Search className="size-4 text-[#8a8f9c] shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search creators by name or skill..."
            className="w-full bg-transparent border-0 outline-none text-sm text-[#111827] placeholder:text-[#9ca3af] ml-2.5 font-normal"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {creatorCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(cat)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-brand-lime text-[#111827] font-semibold shadow-xs scale-105'
                    : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
