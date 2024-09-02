import * as React from "react";
const SvgIconTextPlus = (props) => (
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
      d="M19 10H5m0-4h14m-5 8H5m0 4h6m7-3v6m-3-3h6"
    />
  </svg>
);
export default SvgIconTextPlus;
