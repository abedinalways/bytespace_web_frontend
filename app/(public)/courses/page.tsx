import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { CoursesContainer } from '@/features/courses';
import { siteConfig } from '@/lib/siteConfig';
import { allCoursesData } from '@/features/courses/data/coursesData';

export const metadata: Metadata = {
  title: 'Explore Courses — Learn In-Demand Skills',
  description:
    'Find your next course on ByteSpace. Master Figma, UI/UX Design, Data Science, Web Development, and Digital Illustration from world-class creators.',
  alternates: {
    canonical: `${siteConfig.url}/courses`,
  },
  openGraph: {
    title: 'Explore Courses | ByteSpace',
    description:
      'Master Figma, UI/UX Design, Data Science, Web Development, and Digital Illustration from world-class creators.',
    url: `${siteConfig.url}/courses`,
  },
};

const coursesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: allCoursesData.map((course, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Course',
      name: course.title,
      description: `Course on ${course.category} by ${course.creator}`,
      url: `${siteConfig.url}/courses/${course.slug || course.id}`,
      provider: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
  })),
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white text-brand-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />
      <Navbar overlay />
      <CoursesContainer />
    </div>
  );
}
