import * as React from "react";

const PhotographyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="27"
    fill="none"
    viewBox="0 0 30 27"
    {...props}
  >
    <path
      fill="#242528"
      d="M27 3h-4.755L19.5 0h-9L7.755 3H3C1.35 3 0 4.35 0 6v18c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3V6c0-1.65-1.35-3-3-3m0 21H3V6h6.075l2.745-3h6.36l2.745 3H27z"
    ></path>
    <path
      fill="#242528"
      d="M15 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19.17 17.37a10.43 10.43 0 0 0-8.34 0A3.02 3.02 0 0 0 9 20.145V21h12v-.855c0-1.215-.72-2.295-1.83-2.775"
    ></path>
  </svg>
);

export default PhotographyIcon;
