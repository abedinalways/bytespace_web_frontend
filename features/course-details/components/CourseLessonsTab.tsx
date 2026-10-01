import React from 'react';
import { CourseModule } from '../types';
import { CourseModuleItem } from './CourseModuleItem';
import { CourseProgressCard } from './CourseProgressCard';

interface CourseLessonsTabProps {
  modules: CourseModule[];
}

export function CourseLessonsTab({ modules }: CourseLessonsTabProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* 1. Explore the Modules */}
      <div>
        <h2 className="text-base sm:text-lg font-bold text-[#111827] mb-2 tracking-tight font-heading">
          Explore the Modules
        </h2>
        <p className="text-xs sm:text-[13.5px] text-[#565a65] leading-relaxed">
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </div>

      {/* 2. Lesson List */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-4 tracking-tight font-heading">
          Lesson List
        </h3>
        <div className="space-y-4 sm:space-y-5">
          {modules.map((module) => (
            <CourseModuleItem key={module.id} module={module} />
          ))}
        </div>
      </div>

      {/* 3. Lesson Content */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 tracking-tight font-heading">
          Lesson Content
        </h3>
        <p className="text-xs sm:text-[13.5px] text-[#565a65] leading-relaxed">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* 4. Lesson Progress Tracking */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 tracking-tight font-heading">
          Lesson Progress Tracking
        </h3>
        <p className="text-xs sm:text-[13.5px] text-[#565a65] leading-relaxed mb-4">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>
        <CourseProgressCard progress={55} />
      </div>
    </div>
  );
}
