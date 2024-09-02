import * as React from "react";
const SvgIconSchemaOff = (props) => (
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
      d="M6 2h4v4M6 6H5V5m10 6v-1h5v4h-2m-8-2h2M7.5 7.5V10m0 4v4M3 3l18 18M5 18h5v4H5zm0-8h5v4H5z"
    />
  </svg>
);
export default SvgIconSchemaOff;
