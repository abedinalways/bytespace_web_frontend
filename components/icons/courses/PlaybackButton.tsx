import * as React from "react";

const PlaybackButton: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <path
      fill="#F5F2FF"
      d="M36 6C19.44 6 6 19.44 6 36s13.44 30 30 30 30-13.44 30-30S52.56 6 36 6m-6 43.5v-27L48 36z"
    ></path>
  </svg>
);

export default PlaybackButton;
