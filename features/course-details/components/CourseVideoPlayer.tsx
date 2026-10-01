'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import PlaybackButton from '@/components/icons/courses/PlaybackButton';

interface CourseVideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
}

export function CourseVideoPlayer({
  thumbnailUrl,
  videoUrl,
  title,
}: CourseVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 50);
  };

  const handleClose = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-2xl bg-black group">
      {!isPlaying ? (
        <div
          onClick={handlePlay}
          className="relative size-full cursor-pointer flex items-center justify-center select-none"
          role="button"
          tabIndex={0}
          aria-label={`Play preview for ${title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handlePlay();
            }
          }}
        >
          {/* Thumbnail Image without any outer colored border */}
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />

          {/* Subtle dark overlay on hover */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors" />

          {/* Glass Effect Card with Playback Button */}
          <div className="relative z-10 flex size-20 sm:size-24 md:size-28 items-center justify-center rounded-[20px] sm:rounded-[24px] bg-black/25 backdrop-blur-xl border border-white/30 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-black/35 group-hover:border-white/40">
            <PlaybackButton className="size-11 sm:size-13 md:size-14 text-white drop-shadow-md" />
          </div>
        </div>
      ) : (
        <div className="relative size-full bg-black">
          {/* Close / Cancel Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-3.5 right-3.5 z-30 flex size-9 sm:size-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all cursor-pointer shadow-lg border border-white/20 hover:scale-105 active:scale-95"
            title="Close video"
            aria-label="Close video"
          >
            <X className="size-5" />
          </button>

          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            playsInline
            onEnded={() => setIsPlaying(false)}
            className="size-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
