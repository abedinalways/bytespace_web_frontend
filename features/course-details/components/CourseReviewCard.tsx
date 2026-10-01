import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { CourseReview } from '../types';

interface CourseReviewCardProps {
  review: CourseReview;
}

export function CourseReviewCard({ review }: CourseReviewCardProps) {
  return (
    <div className="rounded-[20px] sm:rounded-[24px] border border-[#eaebf0] p-5 sm:p-6 bg-white shadow-xs">
      {/* Header: Avatar, Name, Role, Date */}
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-3">
          <div className="relative size-10 rounded-full overflow-hidden shrink-0 border border-gray-100">
            <Image
              src={review.avatar}
              alt={review.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#111827]">
              {review.author}
            </h4>
            <p className="text-xs text-[#717684]">
              {review.role}
            </p>
          </div>
        </div>

        <span className="text-xs text-[#8a8f9c] font-normal shrink-0">
          {review.date}
        </span>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 my-2 text-[#222]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-3.5 ${
              i < review.rating
                ? 'fill-[#222] text-[#222]'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-xs sm:text-[13px] text-[#565a65] leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
}
