import React from 'react';
import DesignIcon from '@/components/icons/explore/DesignIcon';
import DevelopmentIcon from '@/components/icons/explore/DevelopmentIcon';
import SoftwareIcon from '@/components/icons/explore/SoftwareIcon';
import BusinessIcon from '@/components/icons/explore/BusinessIcon';
import MarketingIcon from '@/components/icons/explore/MarketingIcon';
import PhotographyIcon from '@/components/icons/explore/PhotographyIcon';

export interface ExploreCategory {
  id: string;
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const exploreCategories: ExploreCategory[] = [
  {
    id: 'design',
    name: 'Design',
    href: '/courses?category=UI%2FUX+Design',
    icon: DesignIcon,
  },
  {
    id: 'development',
    name: 'Development',
    href: '/courses?category=Web+Development',
    icon: DevelopmentIcon,
  },
  {
    id: 'software',
    name: 'IT & Software',
    href: '/courses?category=Data+Science',
    icon: SoftwareIcon,
  },
  {
    id: 'business',
    name: 'Business',
    href: '/courses?category=Freelance+%26+Entrepreneurship',
    icon: BusinessIcon,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    href: '/courses?category=Marketing',
    icon: MarketingIcon,
  },
  {
    id: 'photography',
    name: 'Photography',
    href: '/courses?category=Photography',
    icon: PhotographyIcon,
  },
];
