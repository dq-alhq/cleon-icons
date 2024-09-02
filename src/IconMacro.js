import * as React from "react";
const SvgIconMacro = (props) => (
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
      d="M12 21a6 6 0 0 1-6-6 6 6 0 0 1 6 6m0 0a6 6 0 0 0 6-6 6 6 0 0 0-6 6m0 0V11m0 0a5 5 0 0 1-5-5V3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-5 5"
    />
  </svg>
);
export default SvgIconMacro;
