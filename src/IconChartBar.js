import * as React from "react";
const SvgIconChartBar = (props) => (
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
      d="M9 19v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m5-1a1 1 0 0 1-1 1H4m5-1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1m-6 0V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10M4 20h14m-3-1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z"
    />
  </svg>
);
export default SvgIconChartBar;
