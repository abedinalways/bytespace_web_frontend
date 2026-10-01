import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { CoursesContainer } from '@/features/courses';

export const metadata: Metadata = {
  title: 'Explore Courses — ByteSpace',
  description:
    'Find your next course. Learn Figma, digital assets, big data, productivity, and more from world-class creators.',
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white text-brand-black">
      <Navbar overlay />
      <CoursesContainer />
    </div>
  );
}
