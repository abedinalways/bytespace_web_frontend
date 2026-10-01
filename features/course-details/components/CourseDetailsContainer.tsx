'use client';

import React, { useState } from 'react';
import { CourseDetail } from '../types';
import { CourseDetailsHeader } from './CourseDetailsHeader';
import { CourseVideoPlayer } from './CourseVideoPlayer';
import { CourseSidebarCard } from './CourseSidebarCard';
import { CourseTabs, CourseTab } from './CourseTabs';
import { CourseDescription } from './CourseDescription';
import { CourseSneakPeak } from './CourseSneakPeak';
import { CourseKeyPoints } from './CourseKeyPoints';
import { CourseLessonsTab } from './CourseLessonsTab';
import { CourseReviewsTab } from './CourseReviewsTab';

interface CourseDetailsContainerProps {
  course: CourseDetail;
}

export function CourseDetailsContainer({
  course,
}: CourseDetailsContainerProps) {
  const [activeTab, setActiveTab] = useState<CourseTab>('About');

  return (
    <div className="relative min-h-screen bg-white text-brand-black overflow-hidden">
      {/* Blue Header Background extending down behind the video player */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-[600px] sm:h-[680px] lg:h-[740px] bg-brand-blue -z-0 overflow-hidden"
      >
        {/* Grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">
        {/* 1. Header Information */}
        <CourseDetailsHeader course={course} />

        {/* 2. Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mt-2 sm:mt-4">
          {/* Left Column: Video player & Details */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Video Player */}
            <CourseVideoPlayer
              thumbnailUrl={course.thumbnailUrl}
              videoUrl={course.videoUrl}
              title={course.title}
            />

            {/* Content Tabs & Details on white background */}
            <div className="pt-8 sm:pt-10">
              <CourseTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {activeTab === 'About' && (
                <>
                  <CourseDescription paragraphs={course.description} />
                  <CourseSneakPeak images={course.sneakPeakImages} />
                  <CourseKeyPoints keyPoints={course.keyPoints} />
                </>
              )}

              {activeTab === 'Lesson' && (
                <CourseLessonsTab modules={course.modules} />
              )}

              {activeTab === 'Reviews' && (
                <CourseReviewsTab
                  rating={course.rating}
                  breakdown={course.ratingBreakdown}
                  reviews={course.reviews}
                />
              )}
            </div>
          </div>

          {/* Right Column: Sticky Sidebar Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <CourseSidebarCard course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
