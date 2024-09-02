import * as React from "react";
const SvgIconMilkshake = (props) => (
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
      d="M17 10a5 5 0 0 0-5-5m5 5H7m10 0a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1m-5-8a5 5 0 0 0-5 5m5-5V3m-5 7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1m10 0H7m10 0-1.81 7.243a1 1 0 0 1-.97.757H9.78a1 1 0 0 1-.97-.757L7 13"
    />
  </svg>
);
export default SvgIconMilkshake;
