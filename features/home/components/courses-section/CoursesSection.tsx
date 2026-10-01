'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Courses from './components/Courses';
import CourseGrid from './components/CourseGrid';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.courses-header-anim', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: 'power3.out',
      });

      gsap.from('.courses-tabs-anim', {
        scrollTrigger: {
          trigger: '.courses-tabs-anim',
          start: 'top 88%',
          once: true,
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.course-card-item', {
        scrollTrigger: {
          trigger: '.courses-grid-container',
          start: 'top 85%',
          once: true,
        },
        y: 40,
        opacity: 0,
        scale: 0.98,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto mb-9 sm:mb-11 max-w-3xl text-center">
        <h2 className="courses-header-anim mb-3.5 text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0f1422] leading-[1.18]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="courses-header-anim mx-auto max-w-2xl text-sm sm:text-[15px] leading-relaxed text-[#737887]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different{' '}
          <br className="hidden sm:inline" />
          fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>
      <div className="courses-tabs-anim">
        <Courses />
      </div>
      <CourseGrid />
    </section>
  );
}
