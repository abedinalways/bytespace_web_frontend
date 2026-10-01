'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExploreHeader } from './components/ExploreHeader';
import { ExploreGrid } from './components/ExploreGrid';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ExploreSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.explore-header-anim', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.explore-card-item', {
        scrollTrigger: {
          trigger: '.explore-grid-container',
          start: 'top 88%',
          once: true,
        },
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
      <ExploreHeader />
      <ExploreGrid />
    </section>
  );
}
