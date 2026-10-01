import Image from 'next/image';
import { TotalRevenueCard, YearToDateCard } from './RevenueBadge';
import { HappyStudentsBadge } from './HappyStudentsBadge';

export function GrowthBottomVisual() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[390px] sm:max-w-[460px] md:max-w-[480px] lg:max-w-[500px] h-[340px] xs:h-[390px] sm:h-[450px] md:h-[470px] lg:h-[490px] mx-auto flex items-end justify-center">
      {/* Total Revenue Card - Upper Left Behind Headset */}
      <div className="absolute left-0 xs:left-1 sm:-left-3 lg:-left-6 top-3 xs:top-4 sm:top-6 lg:top-8 z-10 pointer-events-auto">
        <TotalRevenueCard />
      </div>

      {/* Year-To-Date Card - Middle Left Behind Jacket */}
      <div className="absolute left-0 xs:left-1 sm:-left-3 lg:-left-6 top-28 xs:top-32 sm:top-40 lg:top-44 z-10 pointer-events-auto">
        <YearToDateCard />
      </div>

      {/* Animated 3D Diagonal Spring - Right Side Behind Shoulder */}
      <div className="floating-growth-frame absolute right-3 xs:right-5 sm:right-6 lg:right-8 top-16 xs:top-20 sm:top-24 lg:top-28 z-10 w-16 xs:w-20 sm:w-24 lg:w-28 pointer-events-none">
        <Image
          src="/images/professional-growth/frame-two.png"
          alt="3D decorative spring"
          width={120}
          height={120}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Person Two - In Front of Revenue Cards and Spring */}
      <div className="relative z-20 w-[240px] xs:w-[275px] sm:w-[330px] md:w-[360px] lg:w-[390px]">
        <Image
          src="/images/professional-growth/person-two.png"
          alt="Course instructor with tablet and headset"
          width={450}
          height={450}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Happy Students Badge - Bottom Right In Front of Vest */}
      <div className="absolute right-0 xs:right-1 sm:-right-3 lg:-right-5 bottom-3 xs:bottom-4 sm:bottom-6 lg:bottom-8 z-30 pointer-events-auto">
        <HappyStudentsBadge />
      </div>
    </div>
  );
}
