import React from 'react';
import { Star } from 'lucide-react';
import { RatingBreakdown } from '../types';

interface CourseRatingSummaryProps {
  rating: number;
  breakdown: RatingBreakdown[];
}

export function CourseRatingSummary({
  rating,
  breakdown,
}: CourseRatingSummaryProps) {
  return (
    <div className="rounded-[20px] sm:rounded-[24px] border border-[#eaebf0] p-5 sm:p-6 bg-white shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
      {/* Lime Score Box */}
      <div className="size-24 sm:size-28 rounded-[20px] sm:rounded-[22px] bg-brand-lime flex flex-col items-center justify-center p-3 text-center shrink-0 shadow-2xs">
        <span className="text-[11px] font-medium text-[#111827]/80 block mb-0.5">
          Ratings
        </span>
        <span className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight font-heading">
          {rating.toFixed(1)}
        </span>
      </div>

      {/* Breakdown Rows */}
      <div className="flex-1 w-full space-y-2">
        {breakdown.map((row) => (
          <div key={row.stars} className="flex items-center gap-3 sm:gap-4 text-xs">
            {/* Progress Bar */}
            <div className="flex-1 h-1.5 sm:h-2 rounded-full bg-[#f0f0f2] overflow-hidden">
              <div
                className="h-full rounded-full bg-brand-lime transition-all duration-300"
                style={{ width: `${row.percentage}%` }}
              />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-0.5 shrink-0 text-[#222]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3 sm:size-3.5 fill-[#222] text-[#222]"
                />
              ))}
            </div>

            {/* Count */}
            <span className="w-8 text-right font-medium text-[#717684] shrink-0">
              {row.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
