import React from 'react';

interface CourseProgressCardProps {
  progress?: number;
}

export function CourseProgressCard({ progress = 55 }: CourseProgressCardProps) {
  return (
    <div className="rounded-[20px] sm:rounded-[24px] border border-[#eaebf0] p-5 sm:p-6 bg-white shadow-xs">
      <span className="text-xs text-[#717684] font-medium block mb-1">
        Learning Progress
      </span>
      <div className="text-2xl sm:text-3xl font-bold text-[#111827] mb-3 tracking-tight font-heading">
        {progress}%
      </div>

      {/* Progress Track */}
      <div className="w-full h-2 rounded-full bg-[#f0f0f2] overflow-hidden">
        <div
          className="h-full rounded-full bg-brand-lime transition-all duration-500"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
}
