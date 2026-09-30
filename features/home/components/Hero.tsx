'use client';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Navbar } from '@/components/layout/Navbar';
import { SearchBar } from '@/components/reusable/SearchBar';

// Register useGSAP plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

const avatarImages = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80',
];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  // GSAP Entrance & Ambient Floating Animations (Desktop only: >= 768px)
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        // 1. Entrance timeline
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.hero-text-anim', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
        })
          .from(
            '.hero-person-anim',
            {
              y: 60,
              opacity: 0,
              scale: 0.94,
              duration: 1,
              ease: 'power3.out',
            },
            '-=0.5',
          )
          .from(
            '.parallax-item',
            {
              scale: 0.8,
              opacity: 0,
              duration: 0.8,
              stagger: 0.05,
              ease: 'back.out(1.4)',
            },
            '-=0.7',
          );

        // 2. Continuous Organic Idle Floating Animation
        const floatingElements =
          gsap.utils.toArray<HTMLElement>('.floating-element');
        floatingElements.forEach((el, index) => {
          const duration = 2.8 + (index % 4) * 0.7; // 2.8s to 4.9s
          const yDistance = 10 + (index % 3) * 4; // 10px to 18px
          const rotAngle =
            (index % 2 === 0 ? 1 : -1) * (2 + (index % 3) * 1.5); // -5deg to +5deg

          gsap.to(el, {
            y: -yDistance,
            rotation: rotAngle,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.15,
          });
        });
      });

      return () => mm.revert();
    },
    { scope: heroRef },
  );

  // 3. Interactive Mouse Parallax Handler (Desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

    const items = heroRef.current.querySelectorAll<HTMLElement>('[data-depth]');
    items.forEach(item => {
      const depth = parseFloat(item.dataset.depth || '20');
      gsap.to(item, {
        x: mouseX * depth,
        y: mouseY * depth,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    if (!heroRef.current) return;
    const items = heroRef.current.querySelectorAll<HTMLElement>('[data-depth]');
    items.forEach(item => {
      gsap.to(item, {
        x: 0,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-screen overflow-x-clip bg-brand-blue px-4 pt-28 pb-16 text-[#FFFFFF] sm:h-[1024px] sm:min-h-0 sm:overflow-hidden sm:px-6 sm:pt-28 sm:pb-0 lg:px-8"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      <Navbar overlay />

      {/* Main Text Content */}
      <div className="relative z-3 mx-auto max-w-6xl text-center">
        <h1 className="hero-text-anim text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-semibold leading-tight tracking-tight">
          Get Access to Hundreds
          <br /> Courses Available
        </h1>
        <p className="hero-text-anim mt-4 mx-auto text-base sm:text-lg md:text-xl lg:text-[18px] text-[#E5E6E8] max-w-2xl leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="hero-text-anim mt-8 sm:mt-10 max-w-md mx-auto">
          <SearchBar />
        </div>
      </div>

      {/* Background Frame Four & Hero Person (rendered above cards on mobile) */}
      <div className="pointer-events-none relative z-1 mx-auto mt-6 flex flex-col items-center justify-center sm:absolute sm:bottom-0 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2">
        <Image
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-auto w-[min(1149px,100vw)] min-w-[340px] -translate-x-1/2 sm:min-w-0 sm:w-[640px] md:w-[740px] md:min-w-0 lg:w-[1149px] xl:w-[1180px] max-w-[1200px]"
          src="/images/hero-images/frame-four.png"
          alt=""
          width={1149}
          height={442}
          priority
        />
        <div className="hero-person-anim relative z-1">
          <Image
            className="h-auto w-[min(340px,85vw)] object-contain drop-shadow-2xl sm:w-[500px] md:w-[580px] lg:w-[722px] xl:w-[722px]"
            src="/images/hero-images/hero-person.png"
            alt="A student learning with a laptop"
            width={722}
            height={515}
            priority
            sizes="(max-width: 640px) 85vw, (max-width: 768px) 500px, (max-width: 1024px) 580px, 722px"
          />
        </div>
      </div>

      {/* Floating 3D Shapes with Cursor Parallax + Ambient Bobbing (Stationary on mobile, animated on desktop) */}
      {/* 1. Frame One (top left) */}
      <div className="pointer-events-none absolute -left-2 top-[14%] z-0 w-14 opacity-60 sm:top-[28%] sm:w-40 sm:opacity-100 md:w-52">
        <div data-depth="40" className="parallax-item">
          <div className="floating-element">
            <Image
              aria-hidden="true"
              src="/images/hero-images/frame-one.png"
              alt=""
              width={267}
              height={387}
            />
          </div>
        </div>
      </div>

      {/* 2. Cone Two (top right) */}
      <div className="pointer-events-none absolute -right-1 top-[18%] z-0 w-12 opacity-60 sm:right-[-2%] sm:top-[25%] sm:w-32 sm:opacity-100 md:w-44">
        <div data-depth="-45" className="parallax-item">
          <div className="floating-element">
            <Image
              aria-hidden="true"
              src="/images/hero-images/cone-two.png"
              alt=""
              width={213}
              height={372}
            />
          </div>
        </div>
      </div>

      {/* 3. Frame Two (mid left) */}
      <div className="pointer-events-none absolute left-[2%] top-[45%] z-0 w-10 opacity-50 sm:left-[15%] sm:top-[49%] sm:w-24 sm:opacity-100">
        <div data-depth="25" className="parallax-item">
          <div className="floating-element">
            <Image
              aria-hidden="true"
              src="/images/hero-images/frame-two.png"
              alt=""
              width={177}
              height={176}
            />
          </div>
        </div>
      </div>

      {/* 4. Cone One (bottom left) */}
      <div className="pointer-events-none absolute -left-1 bottom-[16%] z-0 w-16 opacity-60 sm:bottom-[6%] sm:left-[4%] sm:w-48 sm:opacity-100 md:w-60">
        <div data-depth="50" className="parallax-item">
          <div className="floating-element">
            <Image
              aria-hidden="true"
              src="/images/hero-images/cone-one.png"
              alt=""
              width={346}
              height={343}
            />
          </div>
        </div>
      </div>

      {/* 5. Cone Three (mid right) */}
      <div className="pointer-events-none absolute right-[2%] top-[48%] z-0 w-11 opacity-50 sm:right-[5%] sm:top-[47%] sm:w-24 sm:opacity-100 md:w-32">
        <div data-depth="-30" className="parallax-item">
          <div className="floating-element">
            <Image
              aria-hidden="true"
              src="/images/hero-images/cone-three.png"
              alt=""
              width={190}
              height={189}
            />
          </div>
        </div>
      </div>

      {/* 6. Frame Three (bottom right) */}
      <div className="pointer-events-none absolute -right-1 bottom-[18%] z-0 w-14 opacity-60 sm:bottom-[6%] sm:right-[4%] sm:w-40 sm:opacity-100 md:w-48">
        <div data-depth="-45" className="parallax-item">
          <div className="floating-element">
            <Image
              aria-hidden="true"
              src="/images/hero-images/frame-three.png"
              alt=""
              width={317}
              height={332}
            />
          </div>
        </div>
      </div>

      {/* Floating Course Highlight Cards (Rendered below the person image on mobile) */}
      <div
        className="pointer-events-none relative z-2 mx-auto mt-6 flex w-full max-w-sm flex-col gap-3.5 sm:absolute sm:inset-0 sm:mt-0 sm:block sm:max-w-none"
        aria-label="Course highlights"
      >
        {/* Card 1: UI/UX Design */}
        <div className="pointer-events-auto relative sm:absolute sm:top-[60%] sm:left-[8%] md:top-[62%] md:left-[15%] lg:top-[61%] lg:left-[27.5%] xl:top-[60%] xl:left-[28%]">
          <div data-depth="30" className="parallax-item">
            <div className="floating-element">
              <div className="grid gap-1 rounded-2xl bg-white/95 p-3.5 text-left text-[#242528] shadow-[0_12px_28px_rgba(7,18,59,0.14)] border border-white/40 backdrop-blur-md transition-transform duration-200 hover:scale-105 sm:px-3.75 sm:py-3">
                <strong className="text-sm font-semibold sm:text-base">UI/UX Design</strong>
                <span className="text-xs text-brand-gray sm:text-[11px]">
                  200 Courses · 1000+ Students
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Learning Progress */}
        <div className="pointer-events-auto relative sm:absolute sm:top-[58%] sm:right-[6%] md:top-[61%] md:right-[12%] lg:top-[61.5%] lg:right-[24.5%] xl:top-[61%] xl:right-[25%]">
          <div data-depth="-38" className="parallax-item">
            <div className="floating-element">
              <div className="grid w-full gap-2 rounded-2xl bg-brand-white/95 p-3.5 text-left text-brand-black shadow-[0_12px_28px_rgba(7,18,59,0.14)] border border-white/40 backdrop-blur-md transition-transform duration-200 hover:scale-105 sm:w-44 sm:p-3 sm:gap-2 md:w-52 lg:w-58">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-brand-gray sm:text-sm">Learning Progress</span>
                  <b className="text-xl font-bold leading-none text-brand-blue sm:text-brand-black sm:text-4xl md:text-5xl lg:text-[48px] sm:font-semibold">
                    55%
                  </b>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-black/10 sm:h-1.75">
                  <div className="h-full w-[55%] rounded-full bg-brand-lime" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Happy Students */}
        <div className="pointer-events-auto relative sm:absolute sm:top-[77%] sm:left-[5%] md:top-[79%] md:left-[10%] lg:top-[80%] lg:left-[22%] xl:top-[79.5%] xl:left-[22.5%]">
          <div data-depth="28" className="parallax-item">
            <div className="floating-element">
              <div className="flex w-full items-center justify-between gap-3 rounded-2xl bg-brand-white/95 p-3.5 text-left text-brand-black shadow-[0_12px_28px_rgba(7,18,59,0.14)] border border-white/40 backdrop-blur-md transition-transform duration-200 hover:scale-105 sm:grid sm:w-48 sm:p-3 md:w-56 lg:w-64.5">
                <div>
                  <b className="block text-sm font-semibold sm:text-base">Happy Students</b>
                  <span className="mt-0.5 flex items-center gap-1 text-xs text-brand-gray sm:text-[11px]">
                    4.5 (240) <span className="text-amber-400">★</span>
                  </span>
                </div>
                <div className="flex items-center">
                  {avatarImages.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className="relative -mr-2 size-7.5 rounded-full border-2 border-white object-cover sm:size-8.5"
                      width={34}
                      height={34}
                      sizes="34px"
                    />
                  ))}
                  <b className="relative grid size-7.5 place-items-center rounded-full bg-brand-lime text-xs font-bold text-brand-black shadow-sm sm:size-8.5 sm:text-[11px]">
                    2K+
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
