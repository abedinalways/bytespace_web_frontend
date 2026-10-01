export function CommunityHeader() {
  return (
    <div className="community-header-anim flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12 mb-12 sm:mb-14 lg:mb-16">
      <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-bold font-heading text-brand-black dark:text-foreground tracking-tight leading-[1.12]">
          Discover What Our
          <br />
          Community Is Saying
        </h2>
      </div>

      <div className="max-w-xl lg:max-w-[430px] xl:max-w-[470px]">
        <p className="text-brand-gray text-xs sm:text-sm lg:text-[13.5px] xl:text-[14px] leading-[1.7]">
          At ByteSpace, our vibrant community of learners and creators is at the heart of
          what we do. Hear directly from those who have experienced the transformative
          journey of learning and creating on our platform. Explore testimonials that reflect
          the diverse perspectives of enthusiastic learners and accomplished creators.
        </p>
      </div>
    </div>
  );
}
