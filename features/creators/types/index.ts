import { Course } from '@/features/courses/types/course';

export interface Creator {
  id: string;
  slug: string;
  name: string;
  title: string;
  avatar: string;
  bio: string[];
  productsCount: number;
  followersCount: number;
  rating: number;
  totalStudents: number;
  featuredCategory: string;
  courses: Course[];
}
