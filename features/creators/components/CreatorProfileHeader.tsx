'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Creator } from '../types';

interface CreatorProfileHeaderProps {
  creator: Creator;
}

export function CreatorProfileHeader({ creator }: CreatorProfileHeaderProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(creator.followersCount);

  const toggleFollow = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers((prev) => Math.max(0, prev - 1));
    } else {
      setIsFollowing(true);
      setFollowers((prev) => prev + 1);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-brand-blue px-4 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 text-white">
      {/* Background Subtle Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        {/* Creator Info Row */}
        <div className="flex items-start gap-4 sm:gap-5 mb-5 sm:mb-6">
          {/* Avatar with soft rounded squircle border */}
          <div className="relative size-16 sm:size-20 rounded-[22px] sm:rounded-[26px] overflow-hidden shrink-0 border-2 border-white/20 shadow-md bg-white/10">
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Name, Creator Badge, and Role */}
          <div className="pt-0.5">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-heading">
                {creator.name}
              </h1>
              <span className="rounded-full bg-brand-lime px-3 py-1 text-xs font-semibold text-[#111827] shadow-2xs">
                Creator
              </span>
            </div>
            <p className="mt-1 text-xs sm:text-sm text-white/80">
              {creator.title}
            </p>
          </div>
        </div>

        {/* Bio Paragraphs */}
        <div className="max-w-4xl space-y-2 text-xs sm:text-[13.5px] leading-relaxed text-white/90 my-5 sm:my-6">
          {creator.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Stats Badges and Follow Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          {/* Left Stats Pills */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#111827] shadow-xs">
              <strong className="font-bold mr-1">{creator.productsCount}</strong>{' '}
              Products
            </span>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-medium text-[#111827] shadow-xs">
              <strong className="font-bold mr-1">{followers}</strong> Followers
            </span>
          </div>

          {/* Right Follow CTA */}
          <button
            type="button"
            onClick={toggleFollow}
            className={`rounded-full px-7 py-2.5 text-xs sm:text-sm font-bold shadow-xs transition-all duration-200 cursor-pointer select-none active:scale-95 ${
              isFollowing
                ? 'bg-white text-[#111827] hover:bg-gray-100'
                : 'bg-brand-lime text-[#111827] hover:bg-[#cbf517]'
            }`}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>
      </div>
    </section>
  );
}
