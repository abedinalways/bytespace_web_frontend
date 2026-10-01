import Image from 'next/image';
import { FigmaCourseCard } from './FigmaCourseCard';
import { LearningProgressCard } from './LearningProgressCard';

export function GrowthTopVisual() {
  return (
    <div className="relative w-full max-w-[340px] xs:max-w-[390px] sm:max-w-[460px] md:max-w-[480px] lg:max-w-[500px] h-[340px] xs:h-[390px] sm:h-[450px] md:h-[470px] lg:h-[490px] mx-auto flex items-end justify-center">
      {/* Course Card - Behind Person One */}
      <div className="absolute left-0 xs:left-1 sm:-left-3 lg:-left-6 top-1 xs:top-2 sm:top-4 z-10 pointer-events-auto">
        <FigmaCourseCard />
      </div>

      {/* Animated 3D Vertical Spring - Behind Learning Progress Card */}
      <div className="floating-growth-frame absolute right-4 xs:right-6 sm:right-8 lg:right-10 top-0 xs:top-1 sm:top-3 z-15 w-16 xs:w-20 sm:w-24 lg:w-28 pointer-events-none">
        <Image
          src="/images/professional-growth/frame-one.png"
          alt="3D decorative spring"
          width={120}
          height={120}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Person One - In Front of Course Card */}
      <div className="relative z-20 w-[240px] xs:w-[275px] sm:w-[330px] md:w-[360px] lg:w-[390px]">
        <Image
          src="/images/professional-growth/person-one.png"
          alt="Young professional learning with laptop"
          width={450}
          height={450}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Learning Progress Card - Overlapping Spring, Above Laptop */}
      <div className="absolute right-0 xs:right-1 sm:-right-3 lg:-right-5 top-20 xs:top-24 sm:top-28 lg:top-32 z-25 pointer-events-auto">
        <LearningProgressCard />
      </div>
    </div>
  );
}
