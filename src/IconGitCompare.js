import * as React from "react";
const SvgIconGitCompare = (props) => (
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
      d="M6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v8a2 2 0 0 0 2 2h5m5-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V8a2 2 0 0 0-2-2h-5m0 0 3 3m-3-3 3-3m-1 15-3-3m3 3-3 3"
    />
  </svg>
);
export default SvgIconGitCompare;
