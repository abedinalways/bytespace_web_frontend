'use client';

import React, { useState } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';

interface CoursesSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType?: string;
  onTypeChange?: (type: string) => void;
}

const typeOptions = ['Courses', 'Workshops', 'Bootcamps', 'All Types'];

export function CoursesSearchBar({
  searchQuery,
  onSearchChange,
  selectedType = 'Courses',
  onTypeChange,
}: CoursesSearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-[540px] mx-auto px-2">
      {/* Search Input Container */}
      <div className="relative flex-1 flex items-center h-11 sm:h-12 rounded-full bg-white px-4 sm:px-5 shadow-xs transition-shadow focus-within:shadow-md focus-within:ring-2 focus-within:ring-white/40">
        <Search className="size-4 text-[#8a8f9c] shrink-0" aria-hidden="true" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent border-0 outline-none text-sm text-[#111827] placeholder:text-[#9ca3af] ml-2.5 font-normal"
          aria-label="Search courses"
        />
      </div>

      {/* Courses Dropdown Button */}
      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 sm:h-12 items-center gap-1.5 sm:gap-2 rounded-full bg-brand-lime px-4 sm:px-6 text-xs sm:text-sm font-semibold text-[#111827] shadow-xs hover:bg-[#c8f01b] transition-colors cursor-pointer select-none"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span>{selectedType}</span>
          <ChevronDown
            className={`size-4 text-[#111827] transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl bg-white p-1.5 shadow-xl border border-gray-100 z-50 text-xs sm:text-sm animate-in fade-in zoom-in-95 duration-150">
              {typeOptions.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => {
                    onTypeChange?.(type);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-left transition-colors cursor-pointer ${
                    selectedType === type
                      ? 'bg-gray-100 text-brand-blue font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{type}</span>
                  {selectedType === type && <Check className="size-3.5 text-brand-blue" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
