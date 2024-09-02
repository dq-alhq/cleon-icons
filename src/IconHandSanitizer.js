import * as React from "react";
const SvgIconHandSanitizer = (props) => (
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
      d="M15 3H9a2 2 0 0 0-2 2m5-2v5m0 3v4m-2-2h4m-7 8h10V11a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3z"
    />
  </svg>
);
export default SvgIconHandSanitizer;
