import * as React from "react";

const BusinessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M18 10.5v-3c0-1.65-1.35-3-3-3H6c-1.65 0-3 1.35-3 3v21c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3v-15c0-1.65-1.35-3-3-3zm-9 18H6v-3h3zm0-6H6v-3h3zm0-6H6v-3h3zm0-6H6v-3h3zm6 18h-3v-3h3zm0-6h-3v-3h3zm0-6h-3v-3h3zm0-6h-3v-3h3zm13.5 18H18v-3h3v-3h-3v-3h3v-3h-3v-3h10.5c.825 0 1.5.675 1.5 1.5v12c0 .825-.675 1.5-1.5 1.5m-1.5-12h-3v3h3zm0 6h-3v3h3z"
    ></path>
  </svg>
);

export default BusinessIcon;
