'use client';

import React, { useState, useMemo } from 'react';
import { Creator } from '../types';
import { CreatorsHeader } from './CreatorsHeader';
import { CreatorCard } from './CreatorCard';
import { SearchX } from 'lucide-react';

interface CreatorsContainerProps {
  creators: Creator[];
}

export function CreatorsContainer({ creators }: CreatorsContainerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Creators');

  const filteredCreators = useMemo(() => {
    return creators.filter((c) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = c.name.toLowerCase().includes(q);
        const matchTitle = c.title.toLowerCase().includes(q);
        const matchCategory = c.featuredCategory.toLowerCase().includes(q);
        if (!matchName && !matchTitle && !matchCategory) return false;
      }

      if (selectedCategory !== 'All Creators') {
        if (c.featuredCategory.toLowerCase() !== selectedCategory.toLowerCase()) {
          return false;
        }
      }

      return true;
    });
  }, [creators, searchQuery, selectedCategory]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Creators');
  };

  return (
    <div className="w-full min-h-screen bg-white text-brand-black">
      {/* 1. Header with Royal Blue Grid Banner & Search */}
      <CreatorsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* 2. Main Grid */}
      <main className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {filteredCreators.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredCreators.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
              <SearchX className="size-8" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              No creators found
            </h3>
            <p className="text-sm text-gray-500 max-w-md mb-5">
              We couldn&apos;t find any creators matching your search or category filter.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="rounded-full bg-brand-blue text-white px-5 py-2.5 text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
