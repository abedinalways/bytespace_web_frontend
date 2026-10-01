'use client';

import React, { useState, useMemo } from 'react';
import { Star } from 'lucide-react';
import { CourseReview, RatingBreakdown } from '../types';
import { CourseRatingSummary } from './CourseRatingSummary';
import { CourseReviewCard } from './CourseReviewCard';

interface CourseReviewsTabProps {
  rating: number;
  breakdown: RatingBreakdown[];
  reviews: CourseReview[];
}

const filterOptions = [
  { label: 'All rating', value: 'all' },
  { label: '5', value: 5 },
  { label: '4', value: 4 },
  { label: '3', value: 3 },
  { label: '2', value: 2 },
  { label: '1', value: 1 },
];

export function CourseReviewsTab({
  rating,
  breakdown,
  reviews,
}: CourseReviewsTabProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | number>('all');

  const filteredReviews = useMemo(() => {
    if (selectedFilter === 'all') return reviews;
    return reviews.filter((r) => r.rating === selectedFilter);
  }, [reviews, selectedFilter]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
      {/* 1. What Learners Are Saying */}
      <div>
        <h2 className="text-base sm:text-lg font-bold text-[#111827] mb-2 tracking-tight font-heading">
          What Learners Are Saying
        </h2>
        <p className="text-xs sm:text-[13.5px] text-[#565a65] leading-relaxed">
          Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* 2. Rating Summary Card */}
      <CourseRatingSummary rating={rating} breakdown={breakdown} />

      {/* 3. Individual Reviews Filter Pills */}
      <div>
        <h3 className="text-sm sm:text-base font-bold text-[#111827] mb-3 font-heading">
          Individual Reviews:
        </h3>
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => {
            const isActive = selectedFilter === opt.value;
            return (
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => setSelectedFilter(opt.value)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-brand-lime text-[#111827] shadow-xs scale-[1.02]'
                    : 'bg-[#f0f0f2] text-[#4b5563] hover:bg-[#e4e5ea] hover:text-[#111827]'
                }`}
              >
                {opt.value !== 'all' && (
                  <Star className="size-3 fill-current text-current" />
                )}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Review Cards List */}
      <div className="space-y-4">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((rev) => (
            <CourseReviewCard key={rev.id} review={rev} />
          ))
        ) : (
          <p className="text-xs text-gray-500 py-6 text-center">
            No reviews found for this rating filter.
          </p>
        )}
      </div>
    </div>
  );
}
