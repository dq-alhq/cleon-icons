import * as React from "react";
const SvgIconChartHistogram = (props) => (
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
      d="M3 3v18h18m-1-3v3m-4-5v5m-4-8v8m-4-5v5M3 11c6 0 5-5 9-5s3 5 9 5"
    />
  </svg>
);
export default SvgIconChartHistogram;
