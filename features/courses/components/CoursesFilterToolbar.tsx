'use client';

import React, { useState } from 'react';
import {
  SlidersHorizontal,
  ChevronDown,
  LayoutGrid,
  Check,
  RotateCcw,
} from 'lucide-react';
import { CourseLevel, SortOption } from '../types/course';
import CategoryIcon from '@/components/icons/courses/CategoryIcon';
import FilterIcon from '@/components/icons/courses/FilterIcon';
import NetworkIcon from '@/components/icons/courses/NetworkIcon';

interface CoursesFilterToolbarProps {
  selectedLevel: CourseLevel;
  onLevelChange: (level: CourseLevel) => void;
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
}

const levels: CourseLevel[] = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const sortLabels: Record<SortOption, string> = {
  'most-relevant': 'Most relevant',
  'newest': 'Newest',
  'price-low': 'Price: Low to High',
  'price-high': 'Price: High to Low',
  'highest-rated': 'Highest Rated',
};

export function CoursesFilterToolbar({
  selectedLevel,
  onLevelChange,
  selectedSort,
  onSortChange,
  selectedCategory,
  onCategoryChange,
  onResetFilters,
  hasActiveFilters,
}: CoursesFilterToolbarProps) {
  const [levelDropdownOpen, setLevelDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pb-2 pt-2">
      {/* Left Action Buttons: Filter, Level, Category */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {/* Filter Button */}
        <button
          type="button"
          onClick={onResetFilters}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
            hasActiveFilters
              ? 'border-brand-blue bg-brand-blue/5 text-brand-blue'
              : 'border-[#e4e5eb] bg-white text-[#4b5563] hover:border-gray-400 hover:text-[#111827]'
          }`}
          title={hasActiveFilters ? 'Reset Filters' : 'Filter Options'}
        >
          <FilterIcon className="size-3.5" />
          <span>Filter</span>
          {hasActiveFilters && <RotateCcw className="size-3 ml-0.5 text-brand-blue" />}
        </button>

        {/* Level Dropdown Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setLevelDropdownOpen(!levelDropdownOpen);
              setSortDropdownOpen(false);
            }}
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
              selectedLevel !== 'All Levels'
                ? 'border-brand-blue bg-brand-blue/5 text-brand-blue font-semibold'
                : 'border-[#e4e5eb] bg-white text-[#4b5563] hover:border-gray-400 hover:text-[#111827]'
            }`}
          >
            {/* 3-bar signal icon */}
            <NetworkIcon className='size-3.5'/>
            
            <span>{selectedLevel === 'All Levels' ? 'Level' : selectedLevel}</span>
            <ChevronDown
              className={`size-3.5 text-gray-400 transition-transform ${
                levelDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Level Dropdown Menu */}
          {levelDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setLevelDropdownOpen(false)}
              />
              <div className="absolute left-0 top-full mt-2 w-44 rounded-2xl bg-white p-1.5 shadow-xl border border-gray-100 z-50 text-xs sm:text-sm animate-in fade-in zoom-in-95 duration-150">
                {levels.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => {
                      onLevelChange(level);
                      setLevelDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-left transition-colors cursor-pointer ${
                      selectedLevel === level
                        ? 'bg-gray-100 text-brand-blue font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{level}</span>
                    {selectedLevel === level && <Check className="size-3.5 text-brand-blue" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Category Button */}
        <button
          type="button"
          onClick={() => onCategoryChange('Featured')}
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
            selectedCategory !== 'Featured'
              ? 'border-brand-blue bg-brand-blue/5 text-brand-blue font-semibold'
              : 'border-[#e4e5eb] bg-white text-[#4b5563] hover:border-gray-400 hover:text-[#111827]'
          }`}
        >
          <CategoryIcon className='size-3.5'/>
          <span>Category</span>
        </button>
      </div>

      {/* Right Sort Dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setSortDropdownOpen(!sortDropdownOpen);
            setLevelDropdownOpen(false);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-[#e4e5eb] bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[13px] font-medium text-[#4b5563] hover:border-gray-400 hover:text-[#111827] transition-all cursor-pointer"
        >
          {/* Sort icon with horizontal lines */}
          <svg className="size-3.5 text-gray-500" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2.5 4.5h11M4.5 8h7M6.5 11.5h3" strokeLinecap="round" />
          </svg>
          <span>{sortLabels[selectedSort]}</span>
          <ChevronDown
            className={`size-3.5 text-gray-400 transition-transform ${
              sortDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Sort Dropdown Menu */}
        {sortDropdownOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setSortDropdownOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl bg-white p-1.5 shadow-xl border border-gray-100 z-50 text-xs sm:text-sm animate-in fade-in zoom-in-95 duration-150">
              {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onSortChange(option);
                    setSortDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-left transition-colors cursor-pointer ${
                    selectedSort === option
                      ? 'bg-gray-100 text-brand-blue font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{sortLabels[option]}</span>
                  {selectedSort === option && <Check className="size-3.5 text-brand-blue" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
