import * as React from "react";
const SvgIconChartAreaLine = (props) => (
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
      d="m4 12 3-4 4 2 5-6 4 4M4 19l4-6 4 2 4-5 4 4v5z"
    />
  </svg>
);
export default SvgIconChartAreaLine;
