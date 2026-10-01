import Link from 'next/link';
import Image from 'next/image';
import { BarChart3, Star } from 'lucide-react';

const studentAvatars = [
  'photo-1534528741775-53994a69daeb',
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1494790108377-be9c29b29330',
  'photo-1500648767791-00dcc994a43e',
];

const tones: Record<string, string> = {
  mint: 'bg-[#ddf5e9] text-[#253510]',
  coral: 'bg-[#ffd1c4] text-[#622e25]',
  violet: 'bg-[#c7c5ff] text-[#26245a]',
};

export function CourseCard({
  title,
  creator,
  category,
  price,
  tone = 'mint',
  image,
}: {
  title: string;
  creator: string;
  category: string;
  price: string;
  tone?: string;
  image?: string;
}) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-[#e7e7eb] bg-white p-[10px] text-[#1f2024]">
      <div
        className={`relative aspect-[1.75] overflow-hidden rounded-xl ${tones[tone] ?? tones.mint}`}
      >
        {image ? (
          <Image
            className="object-cover"
            src={image}
            alt=""
            fill
            sizes="(max-width: 760px) 50vw, 33vw"
          />
        ) : (
          <>
            <span className="relative z-[1] p-5 text-[11px] font-bold tracking-[.13em]">
              {category}
            </span>
            <div className="absolute -right-[30px] -bottom-[115px] size-[210px] rounded-full border-[32px] border-white/50" />
            <div className="absolute top-[55px] left-[34%] size-[155px] rounded-full border-[22px] border-white/60" />
            <div className="absolute top-[66px] left-[44%] h-[100px] w-[108px] rotate-[27deg] skew-x-[-8deg] rounded-[20px] bg-white/60 shadow-[10px_14px_0_#101e4c25]" />
          </>
        )}
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-1 text-[9px] text-[#42434a] sm:inset-x-2.5 sm:bottom-2.5 sm:text-[10px] md:inset-x-3 md:bottom-3">
          <span className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 font-medium leading-none shadow-xs backdrop-blur-sm sm:px-2.5 sm:py-1">
            17 Lessons
          </span>
          <span className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 font-medium leading-none shadow-xs backdrop-blur-sm sm:px-2.5 sm:py-1">
            <span className="hidden lg:inline">2 hours 16 mins</span>
            <span className="lg:hidden">2h 16m</span>
          </span>
          <span className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-white/90 px-2 py-0.5 font-medium leading-none shadow-xs backdrop-blur-sm sm:px-2.5 sm:py-1">
            <span className="hidden min-[480px]:inline">59 Comments</span>
            <span className="min-[480px]:hidden">59</span>
          </span>
        </div>
      </div>
      <div className="px-1 pt-3 pb-1 sm:px-1.5 sm:pt-3.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="m-0 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold tracking-tight text-[#1f2024] sm:text-base">
            {title}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-[#555] sm:text-sm">
            4.5{' '}
            <Star className="size-3.5 fill-current text-amber-400 sm:size-4" />
          </span>
        </div>
        <p className="mt-0.5 mb-2.5 text-xs text-[#777] sm:mb-3">
          by{' '}
          <Link className="font-medium text-blue-700 hover:underline" href="/creators">
            {creator}
          </Link>
        </p>
        <div className="flex items-center justify-between gap-1 text-[#565965]">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#f2f3f5] px-2.5 py-1 text-xs font-medium">
            <BarChart3 className="size-3.5 text-gray-500" /> Beginner
          </span>
          <div className="flex items-center pl-1">
            {studentAvatars.map((avatar, idx) => (
              <Image
                key={avatar}
                src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=64&h=64&q=80`}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className={`-ml-2 size-7 rounded-full border-2 border-white object-cover sm:size-8 ${idx === 3 ? 'max-[420px]:hidden' : ''}`}
              />
            ))}
            <span className="-ml-2 grid size-7 place-items-center rounded-full border-2 border-white bg-[#d4fb20] text-[9px] font-bold text-[#222] sm:size-8 sm:text-[10px]">
              26+
            </span>
          </div>
        </div>
        <div className="mt-2.5 flex items-baseline gap-1 text-blue-700 sm:mt-3">
          <span className="text-base font-bold sm:text-lg">
            {price}
          </span>
          <span className="text-xs font-normal text-[#777]">
            /lifetime
          </span>
        </div>
      </div>
    </article>
  );
}
