import * as React from "react";
const SvgIconTextOrientation = (props) => (
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
      d="M7 15 5.5 9.5M15 8 9.5 6M21 11l-9 9m9-9v4m0-4h-4M5.5 9.5 4 4l5.5 2m-4 3.5 4-3.5"
    />
  </svg>
);
export default SvgIconTextOrientation;
