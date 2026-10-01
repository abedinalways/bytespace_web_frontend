'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FolderClosed,
  Video,
  Award,
  Headphones,
} from 'lucide-react';
import { CourseDetail } from '../types';

interface CourseSidebarCardProps {
  course: CourseDetail;
}

const includeIcons = [
  FolderClosed,
  Video,
  Award,
  Headphones,
];

export function CourseSidebarCard({ course }: CourseSidebarCardProps) {
  return (
    <aside className="w-full bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-[#eaebf0] shadow-xl text-[#111827]">
      {/* 1. Lessons Header */}
      <h2 className="text-base sm:text-lg font-bold text-[#111827] mb-3.5 tracking-tight font-heading">
        {course.totalLessons} Lessons ({course.totalHours} hours)
      </h2>

      {/* Lesson List */}
      <div className="space-y-2.5">
        {course.lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="flex items-center justify-between text-xs sm:text-[13px] py-1 border-b border-gray-50 last:border-0"
          >
            <div className="flex items-center gap-2.5 truncate pr-2">
              <span className="font-semibold text-gray-500 shrink-0">
                {lesson.order}
              </span>
              <span className="truncate text-gray-800 font-medium">
                {lesson.title}
              </span>
            </div>
            <span className="text-brand-blue font-semibold text-xs shrink-0">
              {lesson.duration}
            </span>
          </div>
        ))}
      </div>

      {/* More videos note */}
      <p className="mt-2 text-xs text-[#717684] font-medium cursor-pointer hover:text-[#111827] transition-colors">
        {course.totalLessons - course.lessons.length} more videos
      </p>

      {/* Dive in Note */}
      <p className="mt-4 text-xs text-[#717684] leading-relaxed">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Price */}
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-blue">
          {course.price}
        </span>
        <span className="text-xs text-[#717684] font-normal">
          /lifetime
        </span>
      </div>

      {/* Enroll Button */}
      <button
        type="button"
        className="w-full rounded-full bg-brand-lime hover:bg-[#cbf517] text-[#111827] font-bold py-3.5 text-sm sm:text-base transition-colors shadow-xs cursor-pointer my-3 text-center active:scale-[0.99]"
      >
        Enroll Now
      </button>

      {/* Course Includes */}
      <div className="pt-2">
        <h3 className="font-bold text-sm text-[#111827] mb-2.5 font-heading">
          This course include
        </h3>
        <ul className="space-y-2">
          {course.includes.map((item, idx) => {
            const Icon = includeIcons[idx % includeIcons.length];
            return (
              <li
                key={item}
                className="flex items-center gap-3 text-xs sm:text-[13px] text-[#4b5563]"
              >
                <Icon className="size-4 text-brand-blue shrink-0" />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Divider */}
      <hr className="border-[#eaebf0] my-5" />

      {/* Creator Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="relative size-11 rounded-full overflow-hidden shrink-0 border border-gray-200">
            <Image
              src={course.creatorAvatar}
              alt={course.creator}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#111827]">
              {course.creator}
            </h4>
            <p className="text-xs text-[#717684]">
              {course.creatorTitle}
            </p>
          </div>
        </div>

        <p className="text-xs text-[#717684] leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link
          href={`/creators/${course.creatorSlug}`}
          className="inline-block rounded-full border border-[#d1d5db] px-5 py-2 text-xs font-semibold text-[#374151] hover:bg-gray-50 transition-colors"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
