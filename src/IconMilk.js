import * as React from "react";
const SvgIconMilk = (props) => (
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
      d="M8 6h8M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M8 6 6.906 7.759A6 6 0 0 0 6 10.929V19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.071a6 6 0 0 0-.906-3.17L16 6m-6 4h4m-4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
);
export default SvgIconMilk;
