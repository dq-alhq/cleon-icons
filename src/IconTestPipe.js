import * as React from "react";
const SvgIconTestPipe = (props) => (
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
      d="M20 8.04 7.878 20.164a2.857 2.857 0 0 1-4.041-4.04L15.959 4M7 13h8m0-10 6 6m-2 6 1.5 1.6a2 2 0 1 1-3 0z"
    />
  </svg>
);
export default SvgIconTestPipe;
