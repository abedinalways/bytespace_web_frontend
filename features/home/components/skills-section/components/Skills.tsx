import React from 'react'

export default function Skills() {
  const skills = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
  ];
  return (
    <div
      className="mx-auto mb-12 flex max-w-[1050px] flex-wrap justify-center gap-3 max-md:mb-7 max-md:gap-[7px]"
      aria-label="Course topics"
    >
      {skills.map((skill, index) => (
        <button
          className={`rounded-full border-0 px-[15px] py-[9px] text-xs whitespace-nowrap text-[#5e606a] max-md:px-[10px] max-md:py-[7px] max-md:text-[10px] ${index === 0 ? 'bg-brand-lime text-[#1b1d22]' : 'bg-[#f4f4f6]'}`}
          key={skill}
          type="button"
        >
          {skill}
        </button>
      ))}
      <a
        className="rounded-full px-[15px] py-[9px] text-xs whitespace-nowrap text-blue-700 max-md:px-[10px] max-md:py-[7px] max-md:text-[10px]"
        href="/courses"
      >
        + More
      </a>
    </div>
  );
}
