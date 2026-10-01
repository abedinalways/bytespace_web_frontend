import * as React from "react";

const SoftwareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="24"
    fill="none"
    viewBox="0 0 36 24"
    {...props}
  >
    <path
      fill="#242528"
      d="M30 21c1.65 0 2.985-1.35 2.985-3L33 3c0-1.65-1.35-3-3-3H6C4.35 0 3 1.35 3 3v15c0 1.65 1.35 3 3 3H0v3h36v-3zM6 3h24v15H6z"
    ></path>
  </svg>
);

export default SoftwareIcon;
