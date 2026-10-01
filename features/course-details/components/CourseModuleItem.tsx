import React from 'react';
import { Video } from 'lucide-react';
import { CourseModule } from '../types';

interface CourseModuleItemProps {
  module: CourseModule;
}

export function CourseModuleItem({ module }: CourseModuleItemProps) {
  return (
    <div className="flex items-start gap-3.5 sm:gap-4.5 py-1">
      {/* Lime Video Icon Container */}
      <div className="size-12 sm:size-14 rounded-[18px] sm:rounded-[20px] bg-brand-lime flex items-center justify-center shrink-0 shadow-2xs">
        <Video className="size-5 sm:size-6 text-[#111827]" />
      </div>

      {/* Module Content */}
      <div className="flex-1 pt-0.5">
        <h3 className="font-bold text-sm sm:text-[15px] text-[#111827] mb-1 tracking-tight font-heading">
          {module.title}
        </h3>
        <p className="text-xs sm:text-[13px] text-[#565a65] leading-relaxed">
          {module.description}
        </p>
      </div>
    </div>
  );
}
