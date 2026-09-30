import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { SearchBar } from '@/components/reusable/SearchBar';


const avatarImages = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80',
];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden bg-brand-blue px-4 pt-24 pb-8 text-[#FFFFFF] sm:h-[1024px] sm:px-6 sm:pt-28 sm:pb-0 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />
      <Navbar overlay />
      <div className="relative z-3 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-semibold leading-tight tracking-tight">
          Get Access to Hundreds
          <br /> Courses Available
        </h1>
        <p className="mt-4 mx-auto text-base sm:text-lg md:text-xl lg:text-[18px] text=[#E5E6E8] max-w-2xl leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mt-8 sm:mt-10 max-w-md mx-auto">
          <SearchBar />
        </div>
      </div>
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 hidden h-auto w-[min(1149px,100vw)] -translate-x-1/2 sm:block"
        src="/images/hero-images/frame-four.png"
        alt=""
        width={1149}
        height={442}
        priority
      />
      <Image
        className="absolute bottom-0 left-1/2 z-1 hidden h-auto w-[min(722px,70vw)] -translate-x-1/2 object-contain sm:block"
        src="/images/hero-images/hero-person.png"
        alt="A student learning with a laptop"
        width={722}
        height={515}
        priority
        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, (max-width: 1280px) 75vw, 680px"
      />

      <Image
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 top-[28%] z-0 hidden w-28 sm:block sm:w-40 md:w-52"
        src="/images/hero-images/frame-one.png"
        alt=""
        width={267}
        height={387}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2%] top-[25%] z-0 hidden w-24 sm:block sm:w-32 md:w-44"
        src="/images/hero-images/cone-two.png"
        alt=""
        width={213}
        height={372}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute left-[15%] top-[49%] z-0 hidden w-20 sm:block sm:w-24"
        src="/images/hero-images/frame-two.png"
        alt=""
        width={177}
        height={176}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute left-[4%] bottom-[6%] z-0 hidden w-36 sm:block sm:w-48 md:w-60"
        src="/images/hero-images/cone-one.png"
        alt=""
        width={346}
        height={343}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-[47%] z-0 hidden w-20 sm:block sm:w-24 md:w-32"
        src="/images/hero-images/cone-three.png"
        alt=""
        width={190}
        height={189}
      />
      <Image
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] bottom-[6%] z-0 hidden w-28 sm:block sm:w-40 md:w-48"
        src="/images/hero-images/frame-three.png"
        alt=""
        width={317}
        height={332}
      />

      <div
        className="pointer-events-none relative z-2 mx-auto mt-5 flex w-full max-w-sm flex-col gap-5 sm:absolute sm:inset-0 sm:mt-0 sm:block sm:max-w-none"
        aria-label="Course highlights"
      >
        <div className="pointer-events-auto relative grid gap-1 rounded-xl bg-[#FFFFFF] px-3 py-2.5 text-left text-[#242528] shadow-[0_12px_30px_#07123b24] sm:absolute sm:top-[60%] sm:left-[8%] sm:px-3.75 sm:py-3 md:top-[62%] md:left-[15%] lg:top-[62.4%] lg:left-[28%]">
          <strong className="text-sm sm:text-base">UI/UX Design</strong>
          <span className="text-xs sm:text-[11px] text-brand-gray">
            200 Courses · 1000+ Students
          </span>
        </div>
        <div className="pointer-events-auto relative grid w-full gap-1.5 rounded-xl bg-brand-white p-2.5 text-left text-brand-black shadow-[0_12px_30px_#07123b24] sm:absolute sm:top-[58%] sm:right-[6%] sm:w-44 sm:p-3 sm:gap-2 md:top-[61%] md:right-[12%] md:w-52 lg:top-[63.6%] lg:right-[25%] lg:w-58">
          <span className="text-xs sm:text-sm">Learning Progress</span>
          <b className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-none">
            55%
          </b>
          <i className="h-1.5 sm:h-1.75 rounded-lg bg-[linear-gradient(to_right,#d4fb20_55%,#eee_55%)]" />
        </div>
        <div className="pointer-events-auto relative grid w-full gap-1 rounded-xl bg-brand-white p-2.5 text-left text-brand-black shadow-[0_12px_30px_#07123b24] sm:absolute sm:top-[77%] sm:left-[5%] sm:w-48 sm:p-3 md:top-[79%] md:left-[10%] md:w-56 lg:top-[81.7%] lg:left-[22.8%] lg:w-64.5">
          <b className="text-sm sm:text-base">Happy Students</b>
          <span className="text-xs sm:text-[11px] text-brand-gray">
            4.5 (240) <em className="not-italic text-brand-lime">★</em>
          </span>
          <div className="mt-1 flex items-center">
            {avatarImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt=""
                aria-hidden="true"
                className="relative -mr-1.5 sm:-mr-2 size-7 sm:size-8.5 rounded-full border-2 border-white"
                width={34}
                height={34}
                sizes="34px"
              />
            ))}
            <b className="relative grid size-7 sm:size-8.5 place-items-center rounded-full bg-brand-lime text-xs sm:text-[11px]">
              2K+
            </b>
          </div>
        </div>
      </div>
    </section>
  );
}
