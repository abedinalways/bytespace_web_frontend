import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import {
  CreatorProfileContainer,
  creatorsList,
  defaultCreator,
} from '@/features/creators';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const creator =
    creatorsList.find((c) => c.slug === id || c.id === id) || defaultCreator;

  return {
    title: `${creator.name} — Creator Profile | ByteSpace`,
    description: creator.bio[0] || `${creator.name}'s courses and portfolio on ByteSpace.`,
  };
}

export default async function CreatorProfilePage({ params }: PageProps) {
  const { id } = await params;

  const creator =
    creatorsList.find((c) => c.slug === id || c.id === id) || defaultCreator;

  return (
    <div className="min-h-screen bg-white text-brand-black">
      <Navbar overlay />
      <CreatorProfileContainer creator={creator} />
    </div>
  );
}
