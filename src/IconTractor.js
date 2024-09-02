import * as React from "react";
const SvgIconTractor = (props) => (
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
      d="M7 15v.01M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-6.5m9.5-1.8V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5M18 5h-1a1 1 0 0 0-1 1v4M3 15a4 4 0 1 0 8 0 4 4 0 0 0-8 0"
    />
  </svg>
);
export default SvgIconTractor;
