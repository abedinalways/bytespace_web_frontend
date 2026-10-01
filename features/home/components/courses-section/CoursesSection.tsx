import React from 'react';
import Courses from './components/Courses';
import CourseGrid from './components/CourseGrid';

export default function CoursesSection() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto mb-9 sm:mb-11 max-w-3xl text-center">
        <h2 className="mb-3.5 text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0f1422] leading-[1.18]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mx-auto max-w-2xl text-sm sm:text-[15px] leading-relaxed text-[#737887]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different{' '}
          <br className="hidden sm:inline" />
          fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>
      <Courses />
      <CourseGrid />
    </section>
  );
}
