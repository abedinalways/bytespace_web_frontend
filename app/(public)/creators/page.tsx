import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { CreatorsContainer, creatorsList } from '@/features/creators';

export const metadata: Metadata = {
  title: 'Creators Directory — ByteSpace',
  description:
    'Discover world-class instructors, designers, and creators sharing their knowledge and courses on ByteSpace.',
};

export default function CreatorsPage() {
  return (
    <div className="min-h-screen bg-white text-brand-black">
      <Navbar overlay />
      <CreatorsContainer creators={creatorsList} />
    </div>
  );
}
