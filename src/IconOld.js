import * as React from "react";
const SvgIconOld = (props) => (
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
      d="m11 21-1-4-2-3V8m0 0-4 3 1 3m3-6 3 2 3 .5M7 17l-2 4m11 0v-8.5a1.5 1.5 0 1 1 3 0v.5M7 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
);
export default SvgIconOld;
