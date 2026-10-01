import { HeroSection } from "@/features/home/components/Hero";
import { Branding } from "@/features/home/components/Branding";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen overflow-hidden bg-brand-white text-brand-black">
        <HeroSection />
        <Branding />
      </main>
   </div>
  );
}
