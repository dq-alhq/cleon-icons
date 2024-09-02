import * as React from "react";
const SvgIconGrill = (props) => (
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
      d="M15 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0H7m8-4 1 2m-7-2-3 6m9-15V4m-3 1V4M9 5V4m10 4H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775z"
    />
  </svg>
);
export default SvgIconGrill;
