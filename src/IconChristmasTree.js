import * as React from "react";
const SvgIconChristmasTree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`cleon-icons ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3m2-14 4 4-2 1 4 4-3 1 4 4H5l4-4-3-1 4-4-2-1z"
    />
  </svg>
);
export default SvgIconChristmasTree;
