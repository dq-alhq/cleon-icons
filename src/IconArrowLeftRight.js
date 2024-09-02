import * as React from "react";
const SvgIconArrowLeftRight = (props) => (
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
      d="m17 13 4-4m0 0-4-4m4 4h-4a5 5 0 0 0-5 5m-5-1L3 9m0 0 4-4M3 9h4a5 5 0 0 1 5 5m0 0v5"
    />
  </svg>
);
export default SvgIconArrowLeftRight;
