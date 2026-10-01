import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { CourseDetailsContainer, defaultCourseDetail } from '@/features/course-details';
import { allCoursesData } from '@/features/courses/data/coursesData';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = allCoursesData.find((c) => c.id === id || c.slug === id);
  const title = course ? `${course.title} — ByteSpace` : `${defaultCourseDetail.title} — ByteSpace`;
  const description = course
    ? `Learn ${course.title} by ${course.creator} on ByteSpace.`
    : defaultCourseDetail.subtitle;

  return {
    title,
    description,
  };
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { id } = await params;

  // Find course from allCoursesData if available to customize title/creator/image
  const foundCourse = allCoursesData.find((c) => c.id === id || c.slug === id);

  const courseData = foundCourse
    ? {
        ...defaultCourseDetail,
        id: foundCourse.id,
        slug: foundCourse.slug,
        title: foundCourse.title,
        creator: foundCourse.creator,
        price: foundCourse.price,
      }
    : defaultCourseDetail;

  return (
    <div className="min-h-screen bg-white text-brand-black">
      <Navbar overlay />
      <CourseDetailsContainer course={courseData} />
    </div>
  );
}
