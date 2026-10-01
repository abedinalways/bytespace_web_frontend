import React from 'react';
import { CourseCard, CourseCardProps } from './CourseCard';

export const coursesData: CourseCardProps[] = [
  {
    title: 'Learn Figma from Basic',
    slug: 'learn-figma-from-basic',
    creator: 'purepearl studio',
    category: 'DESIGN',
    price: '$25',
    image: '/images/courses/img01.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: '4.5',
    level: 'Beginner',
    studentsCount: '26+',
  },
  {
    title: 'Build Digital Asset',
    slug: 'build-digital-asset',
    creator: 'purepearl studio',
    category: 'DESIGN',
    price: '$25',
    image: '/images/courses/img02.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: '4.5',
    level: 'Beginner',
    studentsCount: '26+',
  },
  {
    title: 'the Power of Big Data',
    slug: 'the-power-of-big-data',
    creator: 'purepearl studio',
    category: 'DATA & ANALYTICS',
    price: '$25',
    image: '/images/courses/img03.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: '4.5',
    level: 'Beginner',
    studentsCount: '26+',
  },
  {
    title: 'Balancing Productivity and Focus',
    slug: 'balancing-productivity-and-focus',
    creator: 'purepearl studio',
    category: 'PRODUCTIVITY',
    price: '$25',
    image: '/images/courses/img04.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: '4.5',
    level: 'Beginner',
    studentsCount: '26+',
  },
  {
    title: 'Mastering Money Management',
    slug: 'mastering-money-management',
    creator: 'purepearl studio',
    category: 'FINANCE',
    price: '$25',
    image: '/images/courses/img05.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: '4.5',
    level: 'Beginner',
    studentsCount: '26+',
  },
  {
    title: 'From Idea to Startup Success',
    slug: 'from-idea-to-startup-success',
    creator: 'purepearl studio',
    category: 'BUSINESS',
    price: '$25',
    image: '/images/courses/img06.png',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    rating: '4.5',
    level: 'Beginner',
    studentsCount: '26+',
  },
];

export default function CourseGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 max-w-[440px] sm:max-w-none mx-auto w-full">
      {coursesData.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}
