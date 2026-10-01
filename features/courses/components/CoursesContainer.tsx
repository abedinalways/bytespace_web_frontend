'use client';

import React, { useState, useMemo } from 'react';
import { allCoursesData } from '../data/coursesData';
import { CourseLevel, SortOption } from '../types/course';
import { CoursesHeader } from './CoursesHeader';
import { CoursesFilterToolbar } from './CoursesFilterToolbar';
import { CoursesCategoryPills } from './CoursesCategoryPills';
import { CoursesGrid } from './CoursesGrid';
import { CoursesPagination } from './CoursesPagination';

export function CoursesContainer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('Courses');
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>('All Levels');
  const [selectedSort, setSelectedSort] = useState<SortOption>('most-relevant');
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 18;

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    return allCoursesData
      .filter((course) => {
     
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = course.title.toLowerCase().includes(q);
          const matchCreator = course.creator.toLowerCase().includes(q);
          const matchCategory = course.category.toLowerCase().includes(q);
          if (!matchTitle && !matchCreator && !matchCategory) return false;
        }

     
        if (selectedCategory !== 'Featured') {
          if (course.category.toLowerCase() !== selectedCategory.toLowerCase()) {
            return false;
          }
        }

      
        if (selectedLevel !== 'All Levels') {
          if (course.level !== selectedLevel) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (selectedSort === 'price-low') {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
          return priceA - priceB;
        }
        if (selectedSort === 'price-high') {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
          return priceB - priceA;
        }
        if (selectedSort === 'highest-rated') {
          return parseFloat(b.rating) - parseFloat(a.rating);
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedLevel, selectedSort]);

  
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));
  const displayedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'Featured' ||
    selectedLevel !== 'All Levels' ||
    selectedSort !== 'most-relevant';

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Featured');
    setSelectedLevel('All Levels');
    setSelectedSort('most-relevant');
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleLevelChange = (level: CourseLevel) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: SortOption) => {
    setSelectedSort(sort);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      {/* 1. Header with Royal Blue Grid Banner & Search */}
      <CoursesHeader
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />

    
      <main className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
       
        <CoursesFilterToolbar
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
        />

        
        <CoursesCategoryPills
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />

        
        <CoursesGrid
          courses={displayedCourses}
          onResetFilters={hasActiveFilters ? handleResetFilters : undefined}
        />

        
        {filteredCourses.length > 0 && (
          <CoursesPagination
            currentPage={currentPage}
            totalPages={Math.min(5, Math.max(1, totalPages))}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}
