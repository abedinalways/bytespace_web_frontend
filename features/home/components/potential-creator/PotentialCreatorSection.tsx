'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/reusable/Button';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PotentialCreatorSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.creator-content-anim', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.floating-creator-shape', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
        scale: 0.7,
        opacity: 0,
        duration: 0.9,
        stagger: 0.05,
        ease: 'back.out(1.4)',
      });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 640px)', () => {
        const floatingElements = gsap.utils.toArray<HTMLElement>('.floating-creator-shape');
        floatingElements.forEach((el, index) => {
          const duration = 2.4 + (index % 4) * 0.5;
          const yDistance = 12 + (index % 3) * 4;
          const rotAngle = (index % 2 === 0 ? 1 : -1) * (3 + (index % 3) * 1.5);

          gsap.to(el, {
            y: -yDistance,
            rotation: rotAngle,
            duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.12,
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
      className="relative isolate overflow-hidden bg-brand-blue py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Background Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      {/* 1. Top-Left Lime Angled Spring (frame-three.png) - in the outer top-left corner */}
      <div className="floating-creator-shape pointer-events-none absolute -top-4 sm:-top-8 md:-top-10 lg:-top-12 -left-4 sm:-left-6 md:-left-8 lg:-left-10 w-24 sm:w-36 md:w-48 lg:w-56 xl:w-64 z-1">
        <Image
          src="/images/potential-creator/frame-three.png"
          alt=""
          width={240}
          height={240}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 2. Upper-Left White Spring (frame-one.png) - between top-left corner and title */}
      <div className="floating-creator-shape pointer-events-none absolute top-3 sm:top-5 md:top-6 lg:top-8 left-[11%] sm:left-[13%] md:left-[15%] lg:left-[17%] w-11 sm:w-15 md:w-20 lg:w-24 xl:w-28 z-1">
        <Image
          src="/images/potential-creator/frame-one.png"
          alt=""
          width={130}
          height={130}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 3. Middle-Left White Cone (cone-one.png) - along the far left edge */}
      <div className="floating-creator-shape pointer-events-none absolute top-1/2 -translate-y-1/2 -left-2 sm:left-0 md:left-2 lg:left-4 w-10 sm:w-14 md:w-18 lg:w-22 xl:w-26 z-1">
        <Image
          src="/images/potential-creator/cone-one.png"
          alt=""
          width={120}
          height={140}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 4. Bottom-Left Lime Ring (cone-three.png) - in the outer bottom-left corner */}
      <div className="floating-creator-shape pointer-events-none absolute -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16 left-2 sm:left-6 md:left-12 lg:left-16 xl:left-20 w-24 sm:w-36 md:w-48 lg:w-60 xl:w-68 z-1">
        <Image
          src="/images/potential-creator/cone-three.png"
          alt=""
          width={260}
          height={260}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 5. Upper-Right Lime Pyramid (cone-two.png) - between top-right corner and title */}
      <div className="floating-creator-shape pointer-events-none absolute top-3 sm:top-5 md:top-6 lg:top-8 right-[11%] sm:right-[13%] md:right-[15%] lg:right-[17%] w-11 sm:w-15 md:w-20 lg:w-24 xl:w-28 z-1">
        <Image
          src="/images/potential-creator/cone-two.png"
          alt=""
          width={130}
          height={130}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 6. Top-Right White Cylinder (cone-four.png) - in the outer top-right corner */}
      <div className="floating-creator-shape pointer-events-none absolute -top-4 sm:-top-8 md:-top-10 lg:-top-12 -right-4 sm:-right-6 md:-right-8 lg:-right-10 w-24 sm:w-36 md:w-48 lg:w-56 xl:w-64 z-1">
        <Image
          src="/images/potential-creator/cone-four.png"
          alt=""
          width={240}
          height={240}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 7. Bottom-Right Lime Spring (frame-two.png) - in the outer bottom-right corner */}
      <div className="floating-creator-shape pointer-events-none absolute -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16 right-2 sm:right-6 md:right-12 lg:right-16 xl:right-20 w-24 sm:w-36 md:w-48 lg:w-56 xl:w-64 z-1">
        <Image
          src="/images/potential-creator/frame-two.png"
          alt=""
          width={240}
          height={240}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center py-6 sm:py-8">
        <h2 className="creator-content-anim text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold font-heading text-white tracking-tight leading-[1.18] sm:leading-[1.14]">
          Unlock Your Potential as a
          <br className="hidden sm:inline" /> Creator with ByteSpace
        </h2>

        <p className="creator-content-anim mt-4 sm:mt-5 text-white/80 text-xs xs:text-sm sm:text-base leading-relaxed max-w-2xl lg:max-w-3xl px-2 sm:px-4">
          Experience the collaboration of numerous creators and an expanding selection of
          courses. Register now and become a part of a community comprising over 10,000 local
          and international creators. Utilize our Course Editor, and showcase your expertise
          by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="creator-content-anim mt-6 sm:mt-8">
          <Button
            color="accent"
            rounded="full"
            size="lg"
            className="font-semibold text-brand-black px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base shadow-lg hover:brightness-105 active:scale-95 transition-all cursor-pointer border-none"
          >
            Join as Creator
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PotentialCreatorSection;
