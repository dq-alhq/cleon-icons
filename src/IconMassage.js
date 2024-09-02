import * as React from "react";
const SvgIconMassage = (props) => (
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
      d="m4 22 4-2v-3h12m-9 3h9M8 14l3-2 1-4c3 1 3 4 3 6M3 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
);
export default SvgIconMassage;
