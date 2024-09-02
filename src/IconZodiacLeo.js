import * as React from "react";
const SvgIconZodiacLeo = (props) => (
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
      d="M21 17a4 4 0 1 1-8 0c0-4 2-6 2-10m-6 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0c0-4-2-6-2-9m0 0a4 4 0 0 0 8 0M7 7a4 4 0 0 1 8 0"
    />
  </svg>
);
export default SvgIconZodiacLeo;
