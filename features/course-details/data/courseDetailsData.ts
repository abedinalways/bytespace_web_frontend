import { CourseDetail } from '../types';

export const defaultCourseDetail: CourseDetail = {
  id: 'course-2',
  slug: 'build-digital-asset',
  title: 'Build Digital Asset: A Comprehensive Guide',
  subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
  creator: 'purepearl studio',
  creatorSlug: 'purepearl-studio',
  creatorTitle: 'Professional Creator',
  creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
  level: 'Intermediate',
  rating: 4.7,
  reviewsCount: 172,
  studentsCount: 199,
  price: '$25',
  totalLessons: 112,
  totalHours: 24,
  videoUrl: '/images/course-details/demo.mp4',
  thumbnailUrl: '/images/course-details/tumbnail_img.png',
  lessons: [
    {
      id: 'lesson-1',
      order: '01',
      title: 'Introduction to Digital Assets',
      duration: '12 mins',
    },
    {
      id: 'lesson-2',
      order: '02',
      title: 'Design Principles for Impacts',
      duration: '21 mins',
    },
    {
      id: 'lesson-3',
      order: '03',
      title: 'Advanced Techniques in Digital Creation',
      duration: '16 mins',
    },
  ],
  modules: [
    {
      id: 'module-1',
      moduleNumber: 1,
      title: 'Module 1: Introduction to Digital Assets',
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      id: 'module-2',
      moduleNumber: 2,
      title: 'Module 2: Design Principles for Impact',
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      id: 'module-4',
      moduleNumber: 4,
      title: 'Module 4: User-Centric Design Strategies',
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      id: 'module-5',
      moduleNumber: 5,
      title: 'Module 5: Interactive Media and Engagement',
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      id: 'module-6',
      moduleNumber: 6,
      title: 'Module 6: Project Showcase and Critique',
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      id: 'module-7',
      moduleNumber: 7,
      title: 'Module 7: Optimizing Digital Assets for Various Platforms',
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  ratingBreakdown: [
    { stars: 5, count: 720, percentage: 85 },
    { stars: 4, count: 120, percentage: 40 },
    { stars: 3, count: 21, percentage: 10 },
    { stars: 2, count: 12, percentage: 5 },
    { stars: 1, count: 16, percentage: 7 },
  ],
  reviews: [
    {
      id: 'rev-1',
      author: 'PurePearl Studio',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      date: 'a year ago',
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: 'rev-2',
      author: 'Albert Flores',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      date: 'a year ago',
      comment:
        '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
    },
    {
      id: 'rev-3',
      author: 'Cody Fisher',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      date: 'a year ago',
      comment:
        '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."',
    },
    {
      id: 'rev-4',
      author: 'Brooklyn Simmons',
      role: 'UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
      rating: 5,
      date: 'a year ago',
      comment:
        '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the ongoing content kept me motivated throughout."',
    },
  ],
  includes: [
    'Learning Resources',
    'Quality Lesson Videos',
    'Certificate of Completion',
    'Private Consultation',
  ],
  description: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, 'Build Digital Assets: A Comprehensive Guide.' This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeakImages: [
    '/images/course-details/img01.png',
    '/images/course-details/img02.png',
    '/images/course-details/img03.png',
    '/images/course-details/img04.png',
  ],
  keyPoints: [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ],
};
