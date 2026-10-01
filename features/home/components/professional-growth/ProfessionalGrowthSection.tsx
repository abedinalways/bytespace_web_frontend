'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GrowthStats } from './components/GrowthStats';
import { GrowthTopVisual } from './components/GrowthTopVisual';
import { GrowthBottomVisual } from './components/GrowthBottomVisual';
import { GrowthChecklist } from './components/GrowthChecklist';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export function ProfessionalGrowthSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Only animate the 3D frames across screens
      mm.add('(min-width: 320px)', () => {
        const frameElements = gsap.utils.toArray<HTMLElement>('.floating-growth-frame');
        frameElements.forEach((el, index) => {
          const duration = 2.8 + (index % 2) * 0.8;
          const yDistance = 10 + (index % 2) * 5;
          const rotAngle = (index % 2 === 0 ? 1 : -1) * 6;

          gsap.to(el, {
            y: -yDistance,
            rotation: rotAngle,
            duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-brand-white dark:bg-background py-16 sm:py-20 lg:py-28"
    >
      {/* Ambient Ellipse Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-20 w-[420px] sm:w-[650px] lg:w-[880px] opacity-85 z-0"
      >
        <Image
          src="/images/professional-growth/ellipse-one.png"
          alt=""
          width={880}
          height={650}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -right-24 w-[380px] sm:w-[560px] lg:w-[760px] opacity-75 z-0"
      >
        <Image
          src="/images/professional-growth/ellipse-two.png"
          alt=""
          width={760}
          height={750}
          className="w-full h-auto object-contain"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 -left-20 w-[340px] sm:w-[480px] lg:w-[620px] opacity-85 z-0"
      >
        <Image
          src="/images/professional-growth/ellipse-three.png"
          alt=""
          width={620}
          height={750}
          className="w-full h-auto object-contain"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] sm:w-[620px] lg:w-[820px] opacity-75 z-0"
      >
        <Image
          src="/images/professional-growth/ellipse-four.png"
          alt=""
          width={820}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Your Path to Professional Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center mb-20 sm:mb-24 lg:mb-32">
          <div className="flex flex-col text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold font-heading text-brand-black dark:text-foreground tracking-tight leading-[1.12]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="mt-4 sm:mt-6 text-brand-gray text-[15px] sm:text-lg leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities
              and accelerate your career journey. Whether you are looking to sharpen specific
              skills, gain industry expertise, or embark on a new career path entirely, we have
              the resources you need.
            </p>
            <div className="mt-7 sm:mt-10">
              <GrowthStats />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <GrowthTopVisual />
          </div>
        </div>

        {/* Row 2: Create & Manage Courses Easily */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">
          <div className="order-last lg:order-first w-full flex justify-center">
            <GrowthBottomVisual />
          </div>

          <div className="flex flex-col text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold font-heading text-brand-black dark:text-foreground tracking-tight leading-[1.12]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-4 sm:mt-6 text-brand-gray text-[15px] sm:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8">
              <span className="font-semibold text-brand-black dark:text-foreground">ByteSpace</span>{' '}
              supports individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>
            <GrowthChecklist />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalGrowthSection;
