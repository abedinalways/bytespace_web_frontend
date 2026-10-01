'use client';

import React from 'react';
import { courseCategories } from '../data/coursesData';

interface CoursesCategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CoursesCategoryPills({
  selectedCategory,
  onSelectCategory,
}: CoursesCategoryPillsProps) {
  return (
    <div
      className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2 pb-6 sm:pb-8"
      aria-label="Course categories"
    >
      {courseCategories.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-brand-lime text-[#111827] shadow-xs font-semibold scale-[1.02]'
                : 'bg-[#f0f0f2] text-[#4b5563] hover:bg-[#e4e5ea] hover:text-[#111827]'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
