'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Brand {
  name: string;
  icon: React.ReactNode;
}

const BRANDS: Brand[] = [
  {
    name: 'Google',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 1.5h9.8v9.8H1.5V1.5zm11.2 0h9.8v9.8h-9.8V1.5zm-11.2 11.2h9.8v9.8H1.5v-9.8zm11.2 0h9.8v9.8h-9.8v-9.8z" />
      </svg>
    ),
  },
  {
    name: 'Spotify',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.308c-.22.356-.684.47-1.04.25-2.85-1.74-6.438-2.134-10.665-1.168-.407.094-.813-.16-.906-.566-.094-.407.16-.813.566-.907 4.63-1.057 8.59-.61 11.795 1.35.356.22.47.684.25 1.041zm1.47-3.26c-.276.448-.86.59-1.308.314-3.262-2.004-8.234-2.586-12.09-1.415-.503.153-1.034-.136-1.187-.64-.153-.504.136-1.035.64-1.188 4.412-1.339 9.897-.69 13.63 1.62.449.277.59.86.315 1.309zm.126-3.41c-3.912-2.323-10.36-2.537-14.093-1.403-.6.182-1.23-.163-1.413-.763-.182-.6.163-1.23.763-1.413 4.29-1.302 11.41-1.053 15.897 1.61.539.32.716 1.02.396 1.56-.32.538-1.02.716-1.543.406z" />
      </svg>
    ),
  },
  {
    name: 'Slack',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    ),
  },
  {
    name: 'Stripe',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.729.5 6.85.5 2.94 3.738 2.94 8.647c0 7.734 10.428 6.348 10.428 9.615 0 .979-.838 1.488-2.28 1.488-2.474 0-5.328-1.127-7.23-2.278l-.946 5.59c1.898.927 4.996 1.438 7.95 1.438 6.136 0 10.198-3.085 10.198-8.241 0-8.31-10.084-6.6-10.084-9.109z" />
      </svg>
    ),
  },
  {
    name: 'Amazon',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.7 16.9c-2.9 2-6.9 3.1-10.4 3.1-4.9 0-9.4-1.9-12.8-5.1-.3-.3 0-.6.3-.4 3.6 2.4 8.1 3.8 12.7 3.8 3.1 0 6.5-.8 9.7-2.3.5-.3.9.3.5.9zm1-1.4c-.4-.5-2.3-.2-3.2-.1-.3 0-.3-.2-.1-.4 1.6-1.1 4.2-1 4.5-.6.3.4-.1 3-1.6 4.3-.2.2-.4.1-.3-.2.3-.8.7-3 .7-3zm-1.7-5.6c.1 1.4-.7 2.3-1.8 2.7-.8.3-2 .3-2.9.3v-4.6c.9-.1 1.8-.1 2.7.2 1.1.3 1.9 1 2 1.4zm-1.7 4.9c2.2 0 3.3-1.4 3.3-3.7 0-3-1.7-4-4-4-1.5 0-2.9.4-3.9 1-.2.2-.1.4.1.5.9.3 1.1.4 1.1.8 0 .2-.3.5-.3.9 0 .4.3.6.3 1 0 .4-.4.7-.4 1.1 0 .8.7 1.5 1.6 1.9.9.5 2.2.5 2.2.5z" />
      </svg>
    ),
  },
  {
    name: 'Netflix',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.398 0v24c1.164-.206 2.454-.482 3.738-.797V0H5.398zm9.466 0v19.467c1.284-.315 2.574-.591 3.738-.797V0h-3.738zM9.136 0v5.526l5.728 14.733V0H9.136z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },
  {
    name: 'Dropbox',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2L0 6.6 6 11.2l6-4.6L6 2zm12 0l-6 4.6 6 4.6 6-4.6L18 2zM0 15.8l6 4.6 6-4.6-6-4.6-6 4.6zm18-4.6l-6 4.6 6 4.6 6-4.6-6-4.6zM6 22l6-4.6 6 4.6-6 4.6L6 22z" />
      </svg>
    ),
  },
  {
    name: 'Linear',
    icon: (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.934 14.398a10.026 10.026 0 0 1-.418-2.398c0-5.523 4.477-10 10-10 1.258 0 2.453.232 3.555.658L2.934 14.398zM1.986 16.275l14.289-14.29a9.98 9.98 0 0 1 1.764 1.326L3.312 18.04a9.98 9.98 0 0 1-1.326-1.765zm2.84 3.738L19.539 5.301a9.96 9.96 0 0 1 1.527 1.986L6.812 21.539a9.96 9.96 0 0 1-1.986-1.526zm4.77 3.329l13.742-13.742c.426 1.102.662 2.297.662 3.555 0 5.523-4.477 10-10 10-1.258 0-2.453-.236-3.555-.662l-.849.849z" />
      </svg>
    ),
  },
];

export function Branding() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 92%',
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Partner brands"
      className="relative w-full overflow-hidden bg-branding-bg py-8 sm:py-10 md:py-12"
    >
      <div className="pause-on-hover flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center justify-around gap-10 sm:gap-14 md:gap-20">
          {BRANDS.map((brand, idx) => (
            <div
              key={`brand-1-${idx}`}
              className="group/brand inline-flex items-center gap-2.5 sm:gap-3 transition-colors duration-200"
            >
              <span className="text-brand-gray transition-transform duration-200 group-hover/brand:scale-110 group-hover/brand:text-brand-black dark:text-brand-gray dark:group-hover/brand:text-brand-white">
                {brand.icon}
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-brand-gray transition-colors duration-200 sm:text-xl group-hover/brand:text-brand-black dark:text-brand-gray dark:group-hover/brand:text-brand-white">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="animate-marquee flex shrink-0 items-center justify-around gap-10 sm:gap-14 md:gap-20 ml-10 sm:ml-14 md:ml-20"
        >
          {BRANDS.map((brand, idx) => (
            <div
              key={`brand-2-${idx}`}
              className="group/brand inline-flex items-center gap-2.5 sm:gap-3 transition-colors duration-200"
            >
              <span className="text-brand-gray transition-transform duration-200 group-hover/brand:scale-110 group-hover/brand:text-brand-black dark:text-brand-gray dark:group-hover/brand:text-brand-white">
                {brand.icon}
              </span>
              <span className="font-heading text-lg font-bold tracking-tight text-brand-gray transition-colors duration-200 sm:text-xl group-hover/brand:text-brand-black dark:text-brand-gray dark:group-hover/brand:text-brand-white">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}