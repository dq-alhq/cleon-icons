import * as React from "react";
const SvgIconChartGridDots = (props) => (
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
      d="M16 6a2 2 0 0 0 2 2m-2-2a2 2 0 0 1 2-2m-2 2H3m15 2a2 2 0 0 0 2-2m-2 2v8m2-10a2 2 0 0 0-2-2m2 2h1m-3-2V3M4 12a2 2 0 0 0 2 2m-2-2a2 2 0 0 1 2-2m-2 2H3m3 2a2 2 0 0 0 2-2m-2 2v2m2-4a2 2 0 0 0-2-2m2 2h13M6 10V3M4 18a2 2 0 0 0 2 2m-2-2a2 2 0 0 1 2-2m-2 2H3m3 2a2 2 0 0 0 2-2m-2 2v1m2-3a2 2 0 0 0-2-2m2 2h8m0 0a2 2 0 0 0 2 2m-2-2a2 2 0 0 1 2-2m0 4a2 2 0 0 0 2-2m-2 2v1m2-3a2 2 0 0 0-2-2m2 2h1M12 3v18"
    />
  </svg>
);
export default SvgIconChartGridDots;
