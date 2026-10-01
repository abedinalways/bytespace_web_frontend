import Image from 'next/image';
import { TestimonialItem } from '../data';

interface CommunityCardProps {
  testimonial: TestimonialItem;
}

export function CommunityCard({ testimonial }: CommunityCardProps) {
  return (
    <div className="community-card-item bg-white dark:bg-card rounded-[24px] sm:rounded-[28px] lg:rounded-[36px] p-6 sm:p-8 lg:p-9 xl:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/90 dark:border-border/60 hover:shadow-md transition-shadow flex flex-col justify-start h-full">
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px] rounded-full overflow-hidden mb-5 sm:mb-6 shrink-0">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="(max-width: 640px) 56px, 68px"
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-brand-black dark:text-foreground tracking-tight">
          {testimonial.name}
        </h3>
        <p className="text-xs sm:text-sm lg:text-[13px] font-medium text-brand-blue mt-1 mb-4 sm:mb-5 lg:mb-6">
          {testimonial.role}
        </p>
        <p className="text-brand-gray text-xs sm:text-sm lg:text-[13.5px] xl:text-[14px] leading-[1.68]">
          {testimonial.quote}
        </p>
      </div>
    </div>
  );
}
