import React from 'react';
import { exploreCategories } from '../data/exploreData';
import { ExploreCard } from './ExploreCard';

export function ExploreGrid() {
  return (
    <div className="explore-grid-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 xl:gap-5 w-full">
      {exploreCategories.map((category) => (
        <div key={category.id} className="explore-card-item">
          <ExploreCard category={category} />
        </div>
      ))}
    </div>
  );
}
