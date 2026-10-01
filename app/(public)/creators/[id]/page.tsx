import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import {
  CreatorProfileContainer,
  creatorsList,
  defaultCreator,
} from '@/features/creators';
import { siteConfig } from '@/lib/siteConfig';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const creator =
    creatorsList.find((c) => c.slug === id || c.id === id) || defaultCreator;
  const title = `${creator.name} — ${creator.title}`;
  const description =
    creator.bio[0] || `${creator.name}'s courses, projects, and portfolio on ByteSpace.`;
  const url = `${siteConfig.url}/creators/${id}`;
  const imageUrl = creator.avatar || `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'profile',
      title: `${title} | ByteSpace`,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: creator.name,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${title} | ByteSpace`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CreatorProfilePage({ params }: PageProps) {
  const { id } = await params;

  const creator =
    creatorsList.find((c) => c.slug === id || c.id === id) || defaultCreator;

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: creator.name,
    jobTitle: creator.title,
    description: creator.bio.join(' '),
    image: creator.avatar,
    url: `${siteConfig.url}/creators/${creator.slug || creator.id}`,
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };

  return (
    <div className="min-h-screen bg-white text-brand-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar overlay />
      <CreatorProfileContainer creator={creator} />
    </div>
  );
}
