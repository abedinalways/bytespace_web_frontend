import Image from 'next/image';
import { CommunityHeader } from './components/CommunityHeader';
import { CommunityCard } from './components/CommunityCard';
import { testimonials } from './data';

export function CommunitySection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-white dark:bg-background py-16 sm:py-20 lg:py-24 xl:py-28">
      {/* Ambient Background Ellipses */}
      {/* 1. Middle-Top Lime Glow (community-ellipse-two.png) - positioned in the center between heading & description */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 sm:-top-24 left-[46%] -translate-x-1/2 w-[500px] sm:w-[650px] lg:w-[820px] opacity-90 z-0"
      >
        <Image
          src="/images/community/community-ellipse-two.png"
          alt=""
          width={820}
          height={820}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 2. Top-Right / Right-Edge Lime Glow (community-ellipse-three.png) - along the right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 sm:top-8 -right-16 sm:-right-20 lg:-right-24 w-[380px] sm:w-[500px] lg:w-[640px] opacity-85 z-0"
      >
        <Image
          src="/images/community/community-ellipse-three.png"
          alt=""
          width={640}
          height={750}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 3. Bottom-Left Soft Blue Glow (community-ellipse-one.png) - behind the bottom of first card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 sm:-bottom-24 -left-16 sm:-left-20 lg:-left-24 w-[400px] sm:w-[540px] lg:w-[680px] opacity-75 z-0"
      >
        <Image
          src="/images/community/community-ellipse-one.png"
          alt=""
          width={680}
          height={680}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommunityHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {testimonials.map(item => (
            <CommunityCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
