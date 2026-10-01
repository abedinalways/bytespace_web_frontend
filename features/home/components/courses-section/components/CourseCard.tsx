import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';

const studentAvatars = [
  'photo-1570295999919-56ceb5ecca61', // man with glasses & beard (pink bg)
  'photo-1580489944761-15a19d654956', // woman curly blonde hair
  'photo-1494790108377-be9c29b29330', // woman on warm/yellow bg
  'photo-1500648767791-00dcc994a43e', // man with beard in light blue
];

export interface CourseCardProps {
  title: string;
  creator: string;
  category?: string;
  price: string;
  image: string;
  lessons?: string;
  duration?: string;
  comments?: string;
  rating?: string;
  level?: string;
  studentsCount?: string;
  slug?: string;
  id?: string;
}

export function CourseCard({
  title,
  creator,
  price,
  image,
  lessons = '17 Lessons',
  duration = '2 hours 16 mins',
  comments = '59 Comments',
  rating = '4.5',
  level = 'Beginner',
  studentsCount = '26+',
  slug,
  id,
}: CourseCardProps) {
  const courseHref = slug ? `/courses/${slug}` : id ? `/courses/${id}` : '/courses';

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[26px] sm:rounded-[28px] border border-[#e8e9ed] bg-white p-3 sm:p-3.5 transition-all duration-300 hover:shadow-xl hover:shadow-black/[0.04] hover:-translate-y-1">
      {/* Course Thumbnail with Floating Frosted Badges */}
      <div className="relative aspect-[16/10] sm:aspect-[1.58] w-full overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#f4f4f6]">
        <Link href={courseHref} className="block relative size-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        {/* Frosted Glass Badges */}
        <div className="pointer-events-none absolute inset-x-2.5 bottom-2.5 sm:inset-x-3 sm:bottom-3 flex items-center justify-between gap-1 sm:gap-1.5 z-10">
          <span className="inline-flex items-center justify-center rounded-full bg-white/75 backdrop-blur-md px-2.5 py-1 text-[11px] sm:text-xs font-medium text-[#2d3139] shadow-xs border border-white/40 whitespace-nowrap">
            {lessons}
          </span>
          <span className="inline-flex items-center justify-center rounded-full bg-white/75 backdrop-blur-md px-2.5 py-1 text-[11px] sm:text-xs font-medium text-[#2d3139] shadow-xs border border-white/40 whitespace-nowrap">
            {duration}
          </span>
          <span className="inline-flex items-center justify-center rounded-full bg-white/75 backdrop-blur-md px-2.5 py-1 text-[11px] sm:text-xs font-medium text-[#2d3139] shadow-xs border border-white/40 whitespace-nowrap">
            {comments}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-3.5 pb-1 px-1 flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Rating */}
          <div className="flex items-center justify-between gap-2">
            <h3
              title={title}
              className="m-0 truncate text-[17px] sm:text-[18px] font-bold tracking-tight text-[#111827]"
            >
              <Link
                href={courseHref}
                className="hover:text-brand-blue transition-colors"
              >
                {title}
              </Link>
            </h3>
            <div className="flex items-center gap-1 shrink-0 text-[#374151] font-semibold text-sm sm:text-[15px]">
              <span>{rating}</span>
              <Star className="size-4 fill-[#b8bac3] text-[#b8bac3] stroke-0" />
            </div>
          </div>

          {/* Creator */}
          <p className="mt-0.5 mb-3 text-xs sm:text-[13px] text-[#6b7280]">
            by{' '}
            <Link
              href="/creators"
              className="font-medium text-brand-blue hover:underline"
            >
              {creator}
            </Link>
          </p>

          {/* Level Badge & Students Overlap */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f3f4f6] px-3 py-1.5 text-xs font-medium text-[#4b5563]">
              {/* 3-bar signal chart icon */}
              <svg
                className="size-3.5 text-[#555963]"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="2" y="9.5" width="2.5" height="4.5" rx="0.75" />
                <rect x="6.75" y="6" width="2.5" height="8" rx="0.75" />
                <rect x="11.5" y="2.5" width="2.5" height="11.5" rx="0.75" />
              </svg>
              {level}
            </span>

            <div className="flex items-center pl-2">
              {studentAvatars.map((avatar) => (
                <Image
                  key={avatar}
                  src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=80&h=80&q=80`}
                  alt="Student avatar"
                  width={32}
                  height={32}
                  className="-ml-2 size-7 sm:size-8 rounded-full border-2 border-white object-cover shadow-2xs"
                />
              ))}
              <span className="-ml-2 flex size-7 sm:size-8 items-center justify-center rounded-full border-2 border-white bg-brand-lime text-[10px] sm:text-[11px] font-bold text-[#111827] shadow-2xs">
                {studentsCount}
              </span>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-3.5 sm:mt-4 flex items-baseline gap-1">
          <span className="text-[22px] sm:text-[24px] font-bold tracking-tight text-brand-blue">
            {price}
          </span>
          <span className="text-xs sm:text-[13px] font-normal text-[#6b7280]">
            /lifetime
          </span>
        </div>
      </div>
    </article>
  );
}
