'use client';

import React from 'react';

export type CourseTab = 'About' | 'Lesson' | 'Reviews';

interface CourseTabsProps {
  activeTab: CourseTab;
  onTabChange: (tab: CourseTab) => void;
}

const tabs: CourseTab[] = ['About', 'Lesson', 'Reviews'];

export function CourseTabs({ activeTab, onTabChange }: CourseTabsProps) {
  return (
    <div className="flex items-center gap-2 mb-6 sm:mb-8" aria-label="Course section tabs">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`rounded-full px-4 py-1.5 sm:px-4.5 sm:py-2 text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-brand-lime text-[#111827] font-semibold shadow-xs scale-[1.02]'
                : 'bg-[#f0f0f2] text-[#555965] hover:bg-[#e4e5ea] hover:text-[#111827]'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
