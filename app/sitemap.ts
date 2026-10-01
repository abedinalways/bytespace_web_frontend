import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { allCoursesData } from '@/features/courses/data/coursesData';
import { creatorsList } from '@/features/creators/data/creatorsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/courses`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/creators`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const courseRoutes: MetadataRoute.Sitemap = allCoursesData.map((course) => ({
    url: `${siteConfig.url}/courses/${course.slug || course.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const creatorRoutes: MetadataRoute.Sitemap = creatorsList.map((creator) => ({
    url: `${siteConfig.url}/creators/${creator.slug || creator.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes, ...creatorRoutes];
}
