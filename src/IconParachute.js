import * as React from "react";
const SvgIconParachute = (props) => (
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
      d="M22 12a10 10 0 0 0-20 0m20 0c0-1.66-1.46-3-3.25-3-1.8 0-3.25 1.34-3.25 3m6.5 0L12 22M2 12c0-1.66 1.45-3 3.25-3 1.79 0 3.25 1.34 3.25 3M2 12l10 10m3.5-10c0-1.66-1.57-3-3.5-3s-3.5 1.34-3.5 3m7 0L12 22M8.5 12 12 22"
    />
  </svg>
);
export default SvgIconParachute;
