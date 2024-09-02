import * as React from "react";
const SvgIconGlass = (props) => (
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
      d="M8 21h8m-4-6v6m0-6c3.314 0 6-1.988 6-5l-1-7H7l-1 7c0 3.012 2.686 5 6 5"
    />
  </svg>
);
export default SvgIconGlass;
