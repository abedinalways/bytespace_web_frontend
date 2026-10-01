import React from 'react';
import Image from 'next/image';

interface CourseSneakPeakProps {
  images: string[];
}

export function CourseSneakPeak({ images }: CourseSneakPeakProps) {
  return (
    <section className="mb-8" aria-labelledby="sneak-peak-heading">
      <h2
        id="sneak-peak-heading"
        className="text-base sm:text-lg font-bold text-[#111827] mb-3.5 tracking-tight font-heading"
      >
        Sneak Peak
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative aspect-[1.3] w-full rounded-[16px] sm:rounded-[18px] overflow-hidden bg-gray-100 shadow-2xs group"
          >
            <Image
              src={img}
              alt={`Course sneak peak image ${idx + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
