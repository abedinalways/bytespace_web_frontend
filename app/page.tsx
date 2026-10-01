import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/features/home/components/hero-secion/Hero";
import { Branding } from "@/features/home/components/branding/Branding";
import CoursesSection from "@/features/home/components/courses-section/CoursesSection";
import ExploreSection from "@/features/home/components/explore-section/ExploreSection";
import { ProfessionalGrowthSection } from "@/features/home/components/professional-growth";
import { PotentialCreatorSection } from "@/features/home/components/potential-creator";

export default function Home() {
  return (
    <div>
      <Navbar overlay />
      <main className="min-h-screen overflow-hidden bg-brand-white text-brand-black">
        <HeroSection />
        <Branding />
        <CoursesSection />
        <ExploreSection />
        <ProfessionalGrowthSection />
        <PotentialCreatorSection />
      </main>
   </div>
  );
}
