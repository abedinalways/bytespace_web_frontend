import Image from 'next/image';

const studentAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&h=60&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80',
];

export function FigmaCourseCard() {
  return (
    <div className="w-[185px] xs:w-[210px] sm:w-[250px] lg:w-[270px] bg-white dark:bg-card rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 shadow-2xl border border-white/80 dark:border-border/80">
      <div className="relative w-full h-20 xs:h-24 sm:h-28 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden">
        <Image
          src="/images/courses/img01.png"
          alt="Learn Figma from Basic"
          fill
          sizes="(max-width: 640px) 210px, 270px"
          className="object-cover"
        />
        <div className="absolute bottom-1.5 xs:bottom-2 left-1.5 xs:left-2 right-1.5 xs:right-2 flex items-center justify-between gap-1">
          <span className="px-1.5 xs:px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-[9px] xs:text-[10px] text-white font-medium">
            17 Lessons
          </span>
          <span className="px-1.5 xs:px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-[9px] xs:text-[10px] text-white font-medium">
            2 hours 16 mins
          </span>
        </div>
      </div>

      <div className="mt-2 sm:mt-3">
        <h4 className="text-xs xs:text-sm sm:text-base font-bold text-brand-black dark:text-foreground line-clamp-1">
          Learn Figma from Basic
        </h4>
        <p className="text-[10px] xs:text-[11px] text-brand-gray mt-0.5">
          by <span className="text-brand-blue font-medium">purepearl studio</span>
        </p>

        <div className="flex items-center justify-between mt-2 sm:mt-3">
          <span className="inline-flex items-center gap-1 xs:gap-1.5 px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full bg-gray-100 dark:bg-secondary text-[9px] xs:text-[11px] font-medium text-brand-black dark:text-foreground">
            <svg
              className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-brand-black dark:text-foreground"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <rect x="4" y="14" width="3" height="6" rx="1" />
              <rect x="10.5" y="9" width="3" height="11" rx="1" />
              <rect x="17" y="4" width="3" height="16" rx="1" />
            </svg>
            Beginner
          </span>

          <div className="flex items-center -space-x-1.5">
            {studentAvatars.map((src, i) => (
              <div
                key={i}
                className="relative w-4 h-4 xs:w-5 xs:h-5 rounded-full overflow-hidden border-2 border-white dark:border-card"
              >
                <Image
                  src={src}
                  alt={`Student ${i + 1}`}
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 sm:mt-3 pt-2 sm:pt-2.5 border-t border-gray-100 dark:border-border/60 flex items-baseline">
          <span className="text-sm xs:text-base sm:text-lg font-bold text-brand-blue">
            $25
          </span>
          <span className="text-[10px] xs:text-xs text-brand-gray ml-1 font-normal">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
}
