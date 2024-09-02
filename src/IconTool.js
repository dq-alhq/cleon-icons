import * as React from "react";
const SvgIconTool = (props) => (
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
      d="M7 10h3V7L6.5 3.5a6 6 0 0 1 8 8l6 6a2.121 2.121 0 0 1-3 3l-6-6a6 6 0 0 1-8-8z"
    />
  </svg>
);
export default SvgIconTool;
