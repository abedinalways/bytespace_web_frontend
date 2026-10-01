'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const previousScrollBehavior =
      document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    const lenis = new Lenis({
      lerp: 0.1, // Higher = faster/snappier, Lower = slower/smoother (0.1 is standard professional)
      duration: 1.5,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Sync GSAP's ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker to drive Lenis (Much more stable than manual RAF)
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    // Avoid GSAP ticker conflicts
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return <>{children}</>;
}
