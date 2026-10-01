import React from 'react';
import Link from 'next/link';
import { ExploreCategory } from '../data/exploreData';

interface ExploreCardProps {
  category: ExploreCategory;
}

export function ExploreCard({ category }: ExploreCardProps) {
  const Icon = category.icon;

  return (
    <div className="group flex flex-col items-center justify-center rounded-[24px] sm:rounded-[28px] border border-border-secondary bg-white py-8 sm:py-9 px-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-lime hover:shadow-xl hover:shadow-black/[0.04]"> 

    <Link
      href={category.href}>
      <div className="size-16 sm:size-[70px] rounded-full bg-brand-lime flex items-center justify-center mb-4 sm:mb-5 shadow-2xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="size-7 sm:size-8 text-brand-black" />
      </div>
      <span className="font-bold text-sm sm:text-base text-brand-black tracking-tight transition-colors group-hover:text-brand-blue">
        {category.name}
      </span>
    </Link>
      </div>
  );
}
