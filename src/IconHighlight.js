import * as React from "react";
const SvgIconHighlight = (props) => (
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
      d="m12.5 5.5 4 4m-12 4 4 4M3 19h4L17.5 8.5a2.829 2.829 0 0 0-4-4L3 15zm18-4v4h-8l4-4z"
    />
  </svg>
);
export default SvgIconHighlight;
