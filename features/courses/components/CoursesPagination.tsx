'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CoursesPaginationProps {
  currentPage: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

export function CoursesPagination({
  currentPage,
  totalPages = 5,
  onPageChange,
}: CoursesPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-12 sm:mt-16 flex items-center justify-center gap-2 sm:gap-3"
      aria-label="Courses pagination"
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`flex size-9 sm:size-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all ${
          currentPage === 1
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:border-gray-400 hover:text-black hover:bg-gray-50 cursor-pointer'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft className="size-4" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-2">
        {pages.map((page) => {
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              className={`flex size-9 sm:size-10 items-center justify-center rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-black text-white shadow-xs'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`flex size-9 sm:size-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all ${
          currentPage === totalPages
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:border-gray-400 hover:text-black hover:bg-gray-50 cursor-pointer'
        }`}
        aria-label="Next page"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}
