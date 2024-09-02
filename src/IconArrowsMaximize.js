import * as React from "react";
const SvgIconArrowsMaximize = (props) => (
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
      d="M16 4h4m0 0v4m0-4-6 6M8 20H4m0 0v-4m0 4 6-6m6 6h4m0 0v-4m0 4-6-6M8 4H4m0 0v4m0-4 6 6"
    />
  </svg>
);
export default SvgIconArrowsMaximize;
