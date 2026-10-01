import React from 'react';

interface CourseDescriptionProps {
  paragraphs: string[];
}

export function CourseDescription({ paragraphs }: CourseDescriptionProps) {
  return (
    <section className="mb-8" aria-labelledby="course-description-heading">
      <h2
        id="course-description-heading"
        className="text-base sm:text-lg font-bold text-[#111827] mb-3 tracking-tight font-heading"
      >
        Description
      </h2>
      <div className="space-y-3.5 text-xs sm:text-[13.5px] leading-relaxed text-[#565a65]">
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </section>
  );
}
