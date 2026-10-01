'use client';

import React, { useState, useMemo } from 'react';
import { Creator } from '../types';
import { CourseLevel, SortOption } from '@/features/courses/types/course';
import { CreatorProfileHeader } from './CreatorProfileHeader';
import { CreatorProfileFilterToolbar } from './CreatorProfileFilterToolbar';
import { CourseCard } from '@/features/courses/components/CourseCard';

interface CreatorProfileContainerProps {
  creator: Creator;
}

export function CreatorProfileContainer({
  creator,
}: CreatorProfileContainerProps) {
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>('All Levels');
  const [selectedSort, setSelectedSort] = useState<SortOption>('most-relevant');

  const filteredCourses = useMemo(() => {
    return creator.courses
      .filter((course) => {
        if (selectedLevel !== 'All Levels') {
          if (course.level !== selectedLevel) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (selectedSort === 'price-low') {
          const pA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
          const pB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
          return pA - pB;
        }
        if (selectedSort === 'price-high') {
          const pA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
          const pB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
          return pB - pA;
        }
        if (selectedSort === 'highest-rated') {
          return parseFloat(b.rating) - parseFloat(a.rating);
        }
        return 0;
      });
  }, [creator.courses, selectedLevel, selectedSort]);

  const hasActiveFilters =
    selectedLevel !== 'All Levels' || selectedSort !== 'most-relevant';

  const handleResetFilters = () => {
    setSelectedLevel('All Levels');
    setSelectedSort('most-relevant');
  };

  return (
    <div className="min-h-screen bg-white text-brand-black">
      {/* 1. Header with Royal Blue Grid Banner, Bio, Stats, and Follow CTA */}
      <CreatorProfileHeader creator={creator} />

      {/* 2. Main Content Area */}
      <main className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {/* Filter and Sort Toolbar */}
        <CreatorProfileFilterToolbar
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Courses Grid matching Figma Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 max-w-[440px] sm:max-w-none mx-auto w-full">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}
