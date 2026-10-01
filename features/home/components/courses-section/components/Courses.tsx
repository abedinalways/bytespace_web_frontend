'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const categories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('Featured');

  return (
    <div
      className="mx-auto mb-10 sm:mb-12 flex max-w-[980px] flex-wrap justify-center items-center gap-2 sm:gap-2.5 px-2"
      aria-label="Course topics"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 sm:px-[18px] sm:py-[9px] text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-brand-lime text-[#111827] shadow-xs scale-[1.02]'
                : 'bg-[#f0f0f2] text-[#4b5563] hover:bg-[#e4e5ea] hover:text-[#111827]'
            }`}
          >
            {category}
          </button>
        );
      })}
      <Link
        href="/courses"
        className="rounded-full px-3 py-2 sm:px-4 sm:py-[9px] text-xs sm:text-[13px] font-semibold text-brand-blue hover:text-blue-700 hover:underline transition-colors"
      >
        + More
      </Link>
    </div>
  );
}
