'use client';

import Image from 'next/image';
import { BarChart3, Star } from 'lucide-react';

const studentAvatars = [
  'photo-1534528741775-53994a69daeb',
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1494790108377-be9c29b29330',
  'photo-1500648767791-00dcc994a43e',
];

const happyStudentAvatars = [
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1534528741775-53994a69daeb',
  'photo-1500648767791-00dcc994a43e',
  'photo-1494790108377-be9c29b29330',
  'photo-1531123897727-8f129e1688ce',
  'photo-1517841905240-472988babdf9',
];

export function AuthVisualHero() {
  return (
    <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center py-8">
      {/* Container with relative positioning for layered cards and 3D floating elements */}
      <div className="relative w-full max-w-[370px]">

        {/* 1. ANIMATED 3D SHAPE: Yellow / Lime Torus (Ring) - Top Left */}
        <div className="animate-float-slow pointer-events-none absolute -left-10 -top-8 z-30 size-24 sm:-left-12 sm:-top-10 sm:size-28">
          <Image
            src="/images/auth/Cone.png"
            alt="3D Ring"
            width={120}
            height={120}
            className="size-full object-contain drop-shadow-xl"
            priority
          />
        </div>

        {/* 2. BACKGROUND CARD: Build Digital Asset (behind on the left) */}
        <div className="pointer-events-none absolute -left-12 top-6 z-10 w-[270px] -rotate-6 rounded-[22px] border border-white/60 bg-white/95 p-3 shadow-xl backdrop-blur-sm sm:-left-16 sm:w-[310px]">
          <div className="relative aspect-[1.8] w-full overflow-hidden rounded-xl bg-gray-100">
            <Image
              src="/images/auth/frame02.png"
              alt="Build Digital Asset Preview"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2">
              <span className="rounded-full bg-white/80 px-2 py-0.5 text-[8.5px] font-semibold text-gray-700 backdrop-blur-xs">
                17 Lessons
              </span>
            </div>
          </div>
          <div className="pt-2.5">
            <h4 className="text-xs font-bold text-gray-900">Build Digital Asset</h4>
            <p className="text-[10px] text-blue-600">by purepearl studio</p>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[8px] font-medium text-gray-600">
                <BarChart3 size={10} /> Beginner
              </span>
              <span className="text-[11px] font-bold text-blue-700">$25/lifetime</span>
            </div>
          </div>
        </div>

        {/* 3. FOREGROUND MAIN CARD: the Power of Big Data */}
        <div className="relative z-20 w-full rounded-[24px] border border-white/80 bg-white p-3.5 shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
          {/* Main Card Image with Badges */}
          <div className="relative aspect-[1.7] w-full overflow-hidden rounded-2xl bg-gray-900">
            <Image
              src="/images/auth/frame01.png"
              alt="The Power of Big Data Course"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[#222]">
              <span className="inline-flex items-center whitespace-nowrap rounded-full bg-white/80 px-2 py-0.5 text-[8.5px] font-medium leading-none backdrop-blur-sm">
                17 Lessons
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full bg-white/80 px-2 py-0.5 text-[8.5px] font-medium leading-none backdrop-blur-sm">
                2 hours 16 mins
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full bg-white/80 px-2 py-0.5 text-[8.5px] font-medium leading-none backdrop-blur-sm">
                59 Comments
              </span>
            </div>
          </div>

          {/* Main Card Details */}
          <div className="px-1 pt-3 pb-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold tracking-tight text-gray-900 sm:text-[15px]">
                the Power of Big Data
              </h3>
              <div className="flex items-center gap-1 text-xs font-semibold text-gray-800">
                <span>4.5</span>
                <Star size={14} className="fill-amber-400 text-amber-400" />
              </div>
            </div>

            <p className="mt-0.5 text-[11px] text-gray-500">
              by <span className="font-medium text-blue-600">purepearl studio</span>
            </p>

            <div className="mt-2.5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                <BarChart3 size={13} className="text-gray-500" /> Beginner
              </span>

              {/* Student Avatars Stack */}
              <div className="flex items-center pl-2">
                {studentAvatars.map(avatar => (
                  <Image
                    key={avatar}
                    src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=64&h=64&q=80`}
                    alt="Student"
                    width={28}
                    height={28}
                    className="-ml-2 size-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <span className="-ml-2 grid size-7 place-items-center rounded-full border-2 border-white bg-black text-[9px] font-bold text-white">
                  26+
                </span>
              </div>
            </div>

            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-base font-bold text-blue-700">$25</span>
              <span className="text-xs text-gray-500">/lifetime</span>
            </div>
          </div>
        </div>

        {/* 4. ANIMATED 3D SHAPE: Lime Cone / Pyramid - Bottom Left */}
        <div className="animate-float-reverse pointer-events-none absolute -bottom-10 -left-10 z-30 size-26 sm:-bottom-12 sm:-left-12 sm:size-30">
          <Image
            src="/images/auth/cone-01.png"
            alt="3D Pyramid"
            width={130}
            height={130}
            className="size-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* 5. ANIMATED 3D SHAPE: White Zigzag Spring Ribbon - Right */}
        <div className="animate-float-spring pointer-events-none absolute -right-8 top-1/2 z-30 size-24 -translate-y-1/2 sm:-right-12 sm:size-28">
          <Image
            src="/images/auth/cone02.png"
            alt="3D Spring Ribbon"
            width={120}
            height={120}
            className="size-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* 6. BOTTOM-RIGHT CARD: Happy Students (Lime Green) */}
        <div className="absolute -bottom-6 -right-5 z-25 w-[250px] rounded-[22px] bg-brand-lime p-3.5 shadow-xl sm:-bottom-8 sm:-right-8 sm:w-[280px]">
          <h4 className="font-heading text-sm font-bold text-black sm:text-[15px]">
            Happy Students
          </h4>
          <div className="mt-0.5 flex items-center gap-1.5 text-xs font-bold text-black">
            <span>4.5 (240)</span>
            {/* Blue star as in Figma */}
            <Star size={14} className="fill-[#003BE2] text-[#003BE2]" />
          </div>

          <div className="mt-2.5 flex items-center">
            {happyStudentAvatars.map(avatar => (
              <Image
                key={avatar}
                src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=64&h=64&q=80`}
                alt="Happy student"
                width={30}
                height={30}
                className="-ml-2 size-7.5 rounded-full border-2 border-brand-lime object-cover first:ml-0"
              />
            ))}
            <span className="-ml-2 grid size-7.5 place-items-center rounded-full border-2 border-brand-lime bg-[#18181B] text-[9px] font-bold text-white">
              2K+
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
