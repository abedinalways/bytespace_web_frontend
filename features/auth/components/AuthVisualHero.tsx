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
    <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center py-2 sm:py-4">
      <div className="relative h-[530px] w-full max-w-[440px] sm:h-[570px] sm:max-w-[490px]">
        <div className="animate-float-slow pointer-events-none absolute -left-3 top-2 z-30 size-20 sm:-left-6 sm:top-2 sm:size-24">
          <Image
            src="/images/auth/Cone.png"
            alt="3D Ring"
            width={110}
            height={110}
            className="size-full object-contain drop-shadow-xl"
            priority
          />
        </div>

        <div className="absolute left-0 top-12 z-10 w-[325px] rotate-0 rounded-[28px] border border-white/80 bg-white p-4 shadow-xl sm:top-14 sm:w-[365px]">
          <div className="relative aspect-[1.65] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src="/images/auth/frame02.png"
              alt="Build Digital Asset"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2.5 left-2.5">
              <span className="inline-flex items-center whitespace-nowrap rounded-full bg-white/90 px-2.5 py-0.5 text-[9px] font-semibold text-gray-800 backdrop-blur-sm sm:text-[10px]">
                17 Lessons
              </span>
            </div>
          </div>

          <div className="px-1 pt-3.5 pb-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[15px] font-bold tracking-tight text-gray-900 sm:text-base">
                Build Digital Asset
              </h3>
              <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                <span>4.5</span>
                <Star size={15} className="fill-[#D4FB20] text-[#D4FB20]" />
              </div>
            </div>

            <p className="mt-0.5 text-[11px] text-gray-500">
              by <span className="font-medium text-blue-600">purepearl studio</span>
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                <BarChart3 size={13} className="text-gray-500" /> Beginner
              </span>

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

            <div className="mt-2.5 flex items-baseline gap-1">
              <span className="text-lg font-bold text-blue-700">$25</span>
              <span className="text-xs text-gray-500">/lifetime</span>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 z-20 w-[305px] rotate-0 rounded-[28px] border border-white/90 bg-white p-4 shadow-2xl sm:right-2 sm:w-[345px]">
          <div className="relative aspect-[1.65] w-full overflow-hidden rounded-2xl bg-gray-900">
            <Image
              src="/images/auth/frame01.png"
              alt="The Power of Big Data Course"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-2 bottom-2.5 flex items-center justify-between gap-1 text-[#222]">
              <span className="inline-flex items-center whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 text-[8.5px] font-semibold leading-none backdrop-blur-sm sm:px-2.5 sm:text-[9.5px]">
                17 Lessons
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 text-[8.5px] font-semibold leading-none backdrop-blur-sm sm:px-2.5 sm:text-[9.5px]">
                2 hours 16 mins
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 text-[8.5px] font-semibold leading-none backdrop-blur-sm sm:px-2.5 sm:text-[9.5px]">
                59 Comments
              </span>
            </div>
          </div>

          <div className="px-1 pt-3.5 pb-1">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[15px] font-bold tracking-tight text-gray-900 sm:text-base">
                the Power of Big Data
              </h3>
              <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
                <span>4.5</span>
                <Star size={15} className="fill-[#D4FB20] text-[#D4FB20]" />
              </div>
            </div>

            <p className="mt-0.5 text-[11px] text-gray-500">
              by <span className="font-medium text-blue-600">purepearl studio</span>
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-700">
                <BarChart3 size={13} className="text-gray-500" /> Beginner
              </span>

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

            <div className="mt-2.5 flex items-baseline gap-1">
              <span className="text-lg font-bold text-blue-700">$25</span>
              <span className="text-xs text-gray-500">/lifetime</span>
            </div>
          </div>
        </div>

        <div className="animate-float-reverse pointer-events-none absolute -bottom-4 -left-6 z-30 size-26 sm:-bottom-6 sm:-left-8 sm:size-30">
          <Image
            src="/images/auth/cone-01.png"
            alt="3D Pyramid"
            width={130}
            height={130}
            className="size-full object-contain drop-shadow-2xl"
          />
        </div>

        <div className="animate-float-spring pointer-events-none absolute -right-6 bottom-24 z-30 size-22 sm:-right-8 sm:bottom-28 sm:size-26">
          <Image
            src="/images/auth/cone02.png"
            alt="3D Spring Ribbon"
            width={115}
            height={115}
            className="size-full object-contain drop-shadow-2xl"
          />
        </div>

        <div className="absolute -bottom-2 right-0 z-25 w-[260px] rotate-0 rounded-[24px] bg-brand-lime p-3.5 shadow-xl sm:bottom-0 sm:right-2 sm:w-[290px]">
          <h4 className="font-heading text-sm font-bold text-black sm:text-[15px]">
            Happy Students
          </h4>
          <div className="mt-0.5 flex items-center gap-1.5 text-xs font-bold text-black">
            <span>4.5 (240)</span>
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
