export interface LessonPreview {
  id: string;
  order: string;
  title: string;
  duration: string;
}

export interface CourseModule {
  id: string;
  moduleNumber: number | string;
  title: string;
  description: string;
}

export interface CourseReview {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface RatingBreakdown {
  stars: number;
  count: number;
  percentage: number;
}

export interface CourseDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  creator: string;
  creatorSlug: string;
  creatorTitle: string;
  creatorAvatar: string;
  level: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: string;
  totalLessons: number;
  totalHours: number;
  videoUrl: string;
  thumbnailUrl: string;
  lessons: LessonPreview[];
  modules: CourseModule[];
  reviews: CourseReview[];
  ratingBreakdown: RatingBreakdown[];
  includes: string[];
  description: string[];
  sneakPeakImages: string[];
  keyPoints: string[];
}
