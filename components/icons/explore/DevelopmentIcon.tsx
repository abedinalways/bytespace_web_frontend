import * as React from "react";

const DevelopmentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    fill="none"
    viewBox="0 0 36 36"
    {...props}
  >
    <path
      fill="#242528"
      d="M10.5 7.5h15v3h3v-6c0-1.65-1.35-2.985-3-2.985l-15-.015c-1.65 0-3 1.35-3 3v6h3zm12.615 17.385L30 18l-6.885-6.885L21 13.245 25.755 18 21 22.755zM15 22.755 10.245 18 15 13.245l-2.115-2.13L6 18l6.885 6.885zM25.5 28.5h-15v-3h-3v6c0 1.65 1.35 3 3 3h15c1.65 0 3-1.35 3-3v-6h-3z"
    ></path>
  </svg>
);

export default DevelopmentIcon;
