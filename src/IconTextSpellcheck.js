import * as React from "react";
const SvgIconTextSpellcheck = (props) => (
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
      d="m4 15 6-12 6 12M6 11h8m0 8 2 2 4-4"
    />
  </svg>
);
export default SvgIconTextSpellcheck;
