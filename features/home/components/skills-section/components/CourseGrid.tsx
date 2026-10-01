import React from 'react'
import { CourseCard } from './CourseCard';

export default function CourseGrid() {
  const courses = [
    {
      title: 'Learn Figma from Basic',
      creator: 'PurePearl Studio',
      category: 'DESIGN',
      price: '$25',
      tone: 'mint',
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Build Digital Asset',
      creator: 'PurePearl Studio',
      category: 'DESIGN',
      price: '$25',
      tone: 'coral',
      image:
        'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'The Power of Big Data',
      creator: 'PurePearl Studio',
      category: 'DATA & ANALYTICS',
      price: '$25',
      tone: 'violet',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Balancing Productivity and Focus',
      creator: 'PurePearl Studio',
      category: 'PRODUCTIVITY',
      price: '$25',
      tone: 'mint',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'Mastering Money Management',
      creator: 'PurePearl Studio',
      category: 'FINANCE',
      price: '$25',
      tone: 'coral',
      image:
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85',
    },
    {
      title: 'From Idea to Startup Success',
      creator: 'PurePearl Studio',
      category: 'BUSINESS',
      price: '$25',
      tone: 'violet',
      image:
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
    },
  ];
  return (
    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-[22px]">
      {courses.map(course => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}
