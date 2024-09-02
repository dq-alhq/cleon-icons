import * as React from "react";
const SvgIconArmchair = (props) => (
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
      d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 2-2M5 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M5 11V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5M6 19v2m12-2v2"
    />
  </svg>
);
export default SvgIconArmchair;
