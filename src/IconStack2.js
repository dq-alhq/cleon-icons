import * as React from "react";
const SvgIconStack2 = (props) => (
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
      d="m4 12 8 4 8-4M4 16l8 4 8-4M12 4 4 8l8 4 8-4z"
    />
  </svg>
);
export default SvgIconStack2;
