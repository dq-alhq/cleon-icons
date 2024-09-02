import * as React from "react";
const SvgIconClubs = (props) => (
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
      d="M12 3a4 4 0 0 1 3.164 6.447A4 4 0 1 1 14 15.645V17l1 4H9l1-4v-1.355a4 4 0 1 1-1.164-6.199A4 4 0 0 1 11.999 3z"
    />
  </svg>
);
export default SvgIconClubs;
