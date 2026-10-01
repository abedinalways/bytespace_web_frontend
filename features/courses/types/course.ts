export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface Course {
  id: string;
  slug: string;
  title: string;
  creator: string;
  creatorSlug?: string;
  category: string;
  price: string;
  image: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: string;
  level: CourseLevel;
  studentsCount: string;
}

export type SortOption = 'most-relevant' | 'newest' | 'price-low' | 'price-high' | 'highest-rated';
