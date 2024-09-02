import * as React from "react";
const SvgIconFishHook = (props) => (
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
      d="M16 9v6a5 5 0 1 1-10 0v-4l3 3m7-5a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 0V3"
    />
  </svg>
);
export default SvgIconFishHook;
