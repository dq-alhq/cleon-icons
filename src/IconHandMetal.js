import * as React from "react";
const SvgIconHandMetal = (props) => (
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
      d="M11 11.5v-1a1.5 1.5 0 1 1 3 0m0 0V12m0-1.5a1.5 1.5 0 1 1 3 0V12 5.5a1.5 1.5 0 1 1 3 0V16a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L8 13V4.5a1.5 1.5 0 0 1 3 0V12"
    />
  </svg>
);
export default SvgIconHandMetal;
