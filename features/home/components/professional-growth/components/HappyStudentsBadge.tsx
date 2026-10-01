import Image from 'next/image';

const happyStudentAvatars = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&h=60&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&h=60&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=60&h=60&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=60&h=60&q=80',
];

export function HappyStudentsBadge() {
  return (
    <div className="w-[170px] xs:w-[195px] sm:w-[230px] lg:w-[250px] bg-white dark:bg-card rounded-2xl sm:rounded-3xl p-2.5 xs:p-3 sm:p-4 shadow-2xl border border-white/80 dark:border-border/80">
      <div className="flex items-center justify-between">
        <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-brand-black dark:text-foreground">
          Happy Students
        </span>
      </div>
      <div className="flex items-center gap-1 text-[10px] xs:text-[11px] text-brand-gray mt-0.5">
        <span className="font-semibold text-brand-black dark:text-foreground">4.5</span>
        <span>(240)</span>
        <span className="text-yellow-400">★</span>
      </div>

      <div className="flex items-center -space-x-1.5 mt-2 sm:mt-2.5">
        {happyStudentAvatars.map((src, i) => (
          <div
            key={i}
            className="relative w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border-2 border-white dark:border-card"
          >
            <Image
              src={src}
              alt={`Happy student ${i + 1}`}
              fill
              sizes="24px"
              className="object-cover"
            />
          </div>
        ))}
        <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full bg-brand-lime text-brand-black text-[7px] xs:text-[8px] sm:text-[9px] font-bold flex items-center justify-center border-2 border-white dark:border-card">
          2K+
        </div>
      </div>
    </div>
  );
}
