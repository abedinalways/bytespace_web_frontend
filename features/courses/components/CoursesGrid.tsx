'use client';

import React from 'react';
import { Course } from '../types/course';
import { CourseCard } from './CourseCard';
import { SearchX } from 'lucide-react';

interface CoursesGridProps {
  courses: Course[];
  onResetFilters?: () => void;
}

export function CoursesGrid({ courses, onResetFilters }: CoursesGridProps) {
  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
          <SearchX className="size-8" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">No courses found</h3>
        <p className="text-sm text-gray-500 max-w-md mb-5">
          We couldn&apos;t find any courses matching your search or filter criteria. Try adjusting your search query or reset filters.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="rounded-full bg-brand-blue text-white px-5 py-2.5 text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
          >
            Reset All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 max-w-[440px] sm:max-w-none mx-auto w-full">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
