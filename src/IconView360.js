import * as React from "react";
const SvgIconView360 = (props) => (
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
      d="M14 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3M3 5h2.5A1.5 1.5 0 0 1 7 6.5v1A1.5 1.5 0 0 1 5.5 9m0 0H4m1.5 0A1.5 1.5 0 0 1 7 10.5v1A1.5 1.5 0 0 1 5.5 13H3m0 3c0 1.657 4.03 3 9 3s9-1.343 9-3m-4-9v4a2 2 0 0 0 4 0V7a2 2 0 1 0-4 0"
    />
  </svg>
);
export default SvgIconView360;
