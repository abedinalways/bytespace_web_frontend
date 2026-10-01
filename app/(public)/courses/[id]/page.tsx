import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { CourseDetailsContainer, defaultCourseDetail } from '@/features/course-details';
import { allCoursesData } from '@/features/courses/data/coursesData';
import { siteConfig } from '@/lib/siteConfig';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = allCoursesData.find((c) => c.id === id || c.slug === id);
  const title = course ? course.title : defaultCourseDetail.title;
  const description = course
    ? `Enroll in ${course.title} taught by ${course.creator} on ByteSpace. Master ${course.category} with hands-on lessons.`
    : defaultCourseDetail.subtitle;
  const url = `${siteConfig.url}/courses/${id}`;
  const imageUrl = course?.image
    ? `${siteConfig.url}${course.image}`
    : `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      title: `${title} | ByteSpace`,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ByteSpace`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { id } = await params;

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

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseData.title,
    description: courseData.subtitle,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    instructor: {
      '@type': 'Person',
      name: courseData.creator,
    },
    offers: {
      '@type': 'Offer',
      price: courseData.price.replace(/[^0-9.]/g, '') || '25',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="min-h-screen bg-white text-brand-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <Navbar overlay />
      <CourseDetailsContainer course={courseData} />
    </div>
  );
}
