import * as React from "react";
const SvgIconTir = (props) => (
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
      d="M3 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0v-5h9m-5 6h8m4 0h2v-6m0 0c0-1.857-.527-3.637-1.465-4.95C18.598 5.738 17.327 5 16 5h-1m6 7h-4.5L15 5m0 0h-3v13m3-1a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
);
export default SvgIconTir;
