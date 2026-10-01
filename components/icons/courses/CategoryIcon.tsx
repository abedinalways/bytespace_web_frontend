import * as React from 'react';

const CategoryIcon: React.FC<React.SVGProps<SVGElement>> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#242528"
      d="M11.5 2 6 11h11zm0 3.84L13.43 9H9.56zM17 13c-2.49 0-4.5 2.01-4.5 4.5S14.51 22 17 22s4.5-2.01 4.5-4.5S19.49 13 17 13m0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M2.5 21.5h8v-8h-8zm2-6h4v4h-4z"
    ></path>
  </svg>
);

export default CategoryIcon;
