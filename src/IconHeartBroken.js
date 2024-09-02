import * as React from "react";
const SvgIconHeartBroken = (props) => (
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
      d="M19.5 12.572 12 20m0 0-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M12 20v-3l2-4-4-3 2-4"
    />
  </svg>
);
export default SvgIconHeartBroken;
