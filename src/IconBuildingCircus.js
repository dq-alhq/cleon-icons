import * as React from "react";
const SvgIconBuildingCircus = (props) => (
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
      d="M6 11q-.5 8-2 10h4c1 0 4-4 4-9m0 0v-1m0 1c0 5 3 9 4 9h4q-1.5-2-2-10m-6-4V3l2 1h-2m-8 7h16c-3 0-8-3.5-8-4.5 0 1-5 4.5-8 4.5"
    />
  </svg>
);
export default SvgIconBuildingCircus;
