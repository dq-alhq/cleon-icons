import * as React from "react";
const SvgIconSeeding = (props) => (
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
      d="M12 12H9a6 6 0 0 1-6-6V4h3a6 6 0 0 1 6 6v10m0-6a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3"
    />
  </svg>
);
export default SvgIconSeeding;
