import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { CreatorsContainer, creatorsList } from '@/features/creators';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Creators Directory — Meet Top Instructors',
  description:
    'Discover world-class instructors, designers, and developers sharing their knowledge on ByteSpace. Connect with leading creators in the industry.',
  alternates: {
    canonical: `${siteConfig.url}/creators`,
  },
  openGraph: {
    title: 'Creators Directory | ByteSpace',
    description:
      'Discover world-class instructors, designers, and developers sharing their knowledge on ByteSpace.',
    url: `${siteConfig.url}/creators`,
  },
};

const creatorsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: creatorsList.map((creator, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Person',
      name: creator.name,
      jobTitle: creator.title,
      url: `${siteConfig.url}/creators/${creator.slug || creator.id}`,
      image: creator.avatar,
    },
  })),
};

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-white text-brand-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creatorsJsonLd) }}
      />
      <Navbar overlay />
      <CreatorsContainer creators={creatorsList} />
    </div>
  );
}
