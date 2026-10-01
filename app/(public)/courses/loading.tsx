import React from 'react';
import { Container } from '@/components/layout/Container';
import { CourseCardSkeleton } from '@/components/ui/Skeleton';

export default function CoursesLoading() {
  return (
    <section className="section-padding min-h-screen bg-white">
      <Container>
        <div className="mb-8 h-8 w-48 animate-pulse rounded-lg bg-gray-100" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
