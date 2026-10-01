'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, Users, Check } from 'lucide-react';
import NetworkIcon from '@/components/icons/courses/NetworkIcon';
import ShearIcon from '@/components/icons/courses/ShearIcon';
import { CourseDetail } from '../types';

interface CourseDetailsHeaderProps {
  course: CourseDetail;
}

export function CourseDetailsHeader({ course }: CourseDetailsHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({
          title: course.title,
          url: window.location.href,
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
      {/* Left Info: Title, Subtitle, Creator, Badges */}
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 font-heading">
          {course.title}
        </h1>
        <p className="text-xs sm:text-sm text-white/90 mb-3 font-normal">
          {course.subtitle}
        </p>

        {/* Creator line */}
        <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-5">
          by{' '}
          <Link
            href={`/creators/${course.creatorSlug}`}
            className="font-semibold text-brand-lime hover:underline transition-colors"
          >
            {course.creator}
          </Link>
        </p>

        {/* 3 Pills: Level, Rating, Students */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {/* Level Pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 sm:px-3.5 py-1.5 text-xs font-medium text-[#242528] shadow-xs">
            <NetworkIcon className="size-3.5" />
            <span>{course.level}</span>
          </span>

          {/* Rating Pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 sm:px-3.5 py-1.5 text-xs font-medium text-[#242528] shadow-xs">
            <Star className="size-3.5 fill-brand-blue text-brand-blue" />
            <span>
              {course.rating} ({course.reviewsCount} reviews)
            </span>
          </span>

          {/* Students Pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 sm:px-3.5 py-1.5 text-xs font-medium text-[#242528] shadow-xs">
            <Users className="size-3.5 text-brand-blue" />
            <span>{course.studentsCount} Students</span>
          </span>
        </div>
      </div>

      {/* Right Share Button */}
      <div className="shrink-0 self-start">
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-2 rounded-full bg-brand-lime hover:bg-[#cbf517] px-4 py-2 text-xs sm:text-sm font-semibold text-[#111827] shadow-xs cursor-pointer transition-transform duration-150 active:scale-95 select-none"
          title="Share this course"
        >
          {copied ? (
            <>
              <Check className="size-4 text-[#111827]" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <ShearIcon className="size-4" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
