import React from 'react';
import { ExploreHeader } from './components/ExploreHeader';
import { ExploreGrid } from './components/ExploreGrid';

export default function ExploreSection() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
      <ExploreHeader />
      <ExploreGrid />
    </section>
  );
}
