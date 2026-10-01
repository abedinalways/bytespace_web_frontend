import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/features/home/components/hero-secion/Hero";
import { Branding } from "@/features/home/components/branding/Branding";
import SkillsSection from "@/features/home/components/skills-section/SkillsSection";

export default function Home() {
  return (
    <div>
      <Navbar overlay />
      <main className="min-h-screen overflow-hidden bg-brand-white text-brand-black">
        <HeroSection />
        <Branding />
        <SkillsSection />
      </main>
   </div>
  );
}
