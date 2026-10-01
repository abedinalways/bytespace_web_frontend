'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, BookOpen, Users } from 'lucide-react';
import { Creator } from '../types';

interface CreatorCardProps {
  creator: Creator;
}

export function CreatorCard({ creator }: CreatorCardProps) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <article className="group flex flex-col justify-between rounded-[26px] sm:rounded-[28px] border border-[#eaebf0] bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.04] hover:-translate-y-1">
      <div>
        {/* Creator Info Row */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative size-14 sm:size-16 rounded-[20px] sm:rounded-[22px] overflow-hidden shrink-0 border border-gray-100 shadow-2xs bg-gray-50">
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="flex-1 min-w-0 pt-0.5">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg text-[#111827] truncate font-heading">
                <Link
                  href={`/creators/${creator.slug}`}
                  className="hover:text-brand-blue transition-colors"
                >
                  {creator.name}
                </Link>
              </h3>
              <span className="rounded-full bg-brand-lime px-2.5 py-0.5 text-[10px] font-bold text-[#111827] shrink-0">
                Creator
              </span>
            </div>
            <p className="text-xs text-[#717684] truncate mt-0.5">
              {creator.title}
            </p>
          </div>
        </div>

        {/* Bio Preview */}
        <p className="text-xs sm:text-[13px] text-[#565a65] line-clamp-2 leading-relaxed mb-4">
          {creator.bio[0]}
        </p>

        {/* Stats Pills */}
        <div className="flex flex-wrap items-center gap-2 py-2 border-t border-b border-gray-100 mb-5 text-xs text-[#565a65]">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <BookOpen className="size-3.5 text-brand-blue" />
            <strong>{creator.productsCount}</strong> Courses
          </span>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Users className="size-3.5 text-brand-blue" />
            <strong>{creator.followersCount}</strong> Followers
          </span>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center gap-1 font-semibold text-[#111827]">
            <Star className="size-3.5 fill-amber-400 text-amber-400" />
            {creator.rating}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2.5 pt-1">
        <Link
          href={`/creators/${creator.slug}`}
          className="flex-1 text-center rounded-full bg-[#f0f0f2] hover:bg-[#e4e5ea] text-[#111827] font-semibold text-xs sm:text-[13px] py-2.5 transition-colors"
        >
          View Profile
        </Link>
        <button
          type="button"
          onClick={() => setIsFollowing(!isFollowing)}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
            isFollowing
              ? 'bg-black text-white'
              : 'bg-brand-lime text-[#111827] hover:bg-[#cbf517]'
          }`}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </article>
  );
}
